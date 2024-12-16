import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PostCard from '../posts/PostCard';
import { supabase, mockPosts } from '../../lib/supabase';
import { useInView } from 'react-intersection-observer';

const PostFeed = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  const loadMorePosts = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          user:profiles(username, avatar_url),
          likes:likes_count(*),
          comments:comments_count(*),
          liked_by_user:likes!inner(user_id)
        `)
        .order('created_at', { ascending: false })
        .range(posts.length, posts.length + 5);

      if (error) throw error;

      if (data) {
        setPosts([...posts, ...data]);
        setHasMore(data.length === 5);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      
      {hasMore && (
        <div ref={ref} className="flex justify-center p-4">
          {loading && (
            <div className="w-6 h-6 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PostFeed;