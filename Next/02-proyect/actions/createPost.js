'use server'

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary"; // Assuming you have a function to handle image uploads

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const createPost = async (prevState, formData) => {
    const title = formData.get('title');
    const content = formData.get('content');
    const image = formData.get('image'); // This would be used for file uploads

    let errors = [];

    if (!title || title.trim().length === 0) {
        errors.push('Title is required');
    }
    if (!content || content.trim().length === 0) {
        errors.push('Content is required');
    }
    if (!image || image.size === 0) {
        errors.push('Image is required');
    }

    if (errors.length > 0) {
        return { errors };
    }

    let imageUrl;

    try {
        imageUrl = await uploadImage(image);
    } catch (error) {
        console.error('Error uploading image:', error);
        errors.push('Failed to upload image');
    }

    // If no errors, proceed with creating the post
    const newPost = {
        title,
        content,
        imageUrl: imageUrl || '',
        userId: 1
    };

    await storePost(newPost);
    
    revalidatePath('/', 'layout')
    redirect('/');
};


export const togglePostLikeStatus = async (postId) => {   
    await updatePostLikeStatus(postId, 2)
    // After updating the like status, revalidate the path to refresh the data
    revalidatePath('/', 'layout');
}