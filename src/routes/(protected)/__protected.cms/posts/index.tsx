import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useGetPaginatedPosts } from "@/services/query&mutations/use-get-paginated-posts";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Pagination from "@/lib/use-pagination";
import { useDeletePost } from "@/services/query&mutations/use-delete-post";

const PostsTable = () => {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const { data: posts, isPending } = useGetPaginatedPosts({ page, pageSize, search: debouncedSearch });
    const { mutate: deletePost } = useDeletePost();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    return (
        <div className="max-w-[1400px] mx-auto py-10 px-[50px] ">
            <div className="flex justify-between items-center mb-4">
                <Input
                    placeholder="Search posts..."
                    value={search}
                    onChange={handleSearchChange}
                    className="w-1/3"
                />

               

                <Button variant="outline" className="text-sm" type="button">
                    <Link to="/cms/editor">Create New Post</Link>
                </Button>
            </div>
            <Table className="overflow-x-scroll">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">ID</TableHead>
                        <TableHead className="w-[200px]">Title</TableHead>
                        <TableHead className="w-[200px]">Author</TableHead>
                        <TableHead className="w-[200px]">Route</TableHead>
                        <TableHead className="w-[200px]">Created At</TableHead>
                        <TableHead className="w-[200px]">Updated At</TableHead>
                        <TableHead className="w-[200px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts && posts?.posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.id.split("-")[0]}</TableCell>
                            <TableCell className="">{post.title}</TableCell>
                            <TableCell>{post.author}</TableCell>
                            <TableCell>/news/{post.route}</TableCell>
                            <TableCell>{new Date(post.createdAt).toLocaleString()}</TableCell>
                            <TableCell>{new Date(post.updatedAt).toLocaleString()}</TableCell>
                            <TableCell className="flex flex-row gap-2">
                                <Button>
                                    <Link to={'/news/' + post.id}>
                                        View
                                    </Link>
                                </Button>
                                <Button variant="destructive" className="ml-2"
                                    onClick={() => {
                                        deletePost(post.id)
                                    }}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    
                    {!isPending && posts?.posts.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                No posts found.
                            </TableCell>
                        </TableRow>
                    )}

                    {isPending && (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                Loading...
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="mt-4 flex justify-between">
                <p>{posts?.pagination.total || 0} total posts</p>
                
                <Pagination
                    currentPage={page}
                    totalPages={posts?.pagination.totalPages || 1}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            </div>
        </div>
    );
};

export const Route = createFileRoute('/(protected)/__protected/cms/posts/')({
    component: PostsTable,
})