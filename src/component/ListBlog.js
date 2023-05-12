import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Table } from "react-bootstrap";
import styles from "../assets/css/listBlogs.module.css"


export default function ListBlog() {
    const navigate = useNavigate();
    const { blogsState, categoriesState } = useSelector((state) => state)



    return (<>
        <div className={`${styles.listBlogsWrapper} ${styles.shadow}`}>
            <div className={styles.btnWrapper}>
                <Button onClick={() => navigate("/addBlog")} variant="primary">
                    Blog Ekle
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Sıra</th>

                        <th scope="col">Başlık</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Yazar</th>
                    </tr>
                </thead>
                <tbody>
                    {blogsState.blogs.map((blog, index) => {
                        const category = categoriesState?.categories?.find(
                            (item) => item.id === blog?.categoryId
                        );
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>

                                <td>{blog.title.toLocaleUpperCase("tr-TR")}</td>
                                <td>{category?.name}</td>
                                <td>{blog.content}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </div>
    </>
    );
};