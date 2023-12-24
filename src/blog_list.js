const blog_list = ({blogs,title}) => {
    return(
        <div className="home">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                </div>
            ))}
        </div>
    );
}
export default blog_list;