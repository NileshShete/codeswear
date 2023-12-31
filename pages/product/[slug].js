import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { slug } = router.query; 

    return (
        <div>
            <h1>Dynamic Page for Slug: {slug}</h1>
        </div>
    );
};

export default Post;