"use client";
import { usePathname } from "next/navigation";
const BlogPost = ()=>{
    const path = usePathname();
    const slug = path.split("/").at(2).replace(/-/g," ").replace(/\b\w/g, (char)=>char.toUpperCase());
    return(
        <div>
            {slug}
        </div>
    );
}

export default BlogPost;