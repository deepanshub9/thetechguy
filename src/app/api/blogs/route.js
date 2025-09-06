import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch blogs from Dev.to public API
    const response = await fetch('https://dev.to/api/articles?username=deepanshub09&per_page=10', {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const blogs = await response.json();
    
    // Transform the data to match our needs
    const transformedBlogs = blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      url: blog.url,
      publishedAt: blog.published_at,
      tags: blog.tag_list,
      readingTime: blog.reading_time_minutes,
      publicReactions: blog.public_reactions_count,
      coverImage: blog.cover_image,
      slug: blog.slug
    }));

    return NextResponse.json({
      success: true,
      blogs: transformedBlogs
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch blogs',
        details: error.message 
      },
      { status: 500 }
    );
  }
}