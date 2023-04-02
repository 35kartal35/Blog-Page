import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Table } from "react-bootstrap";



export default function ListBlog() {
    const navigate = useNavigate();
    const { blogsState } = useSelector((state) => state)



    return (<>
        <div className="">
            <Button onClick={() => navigate("/addBlog")} variant="primary">
                Blog Ekle
            </Button>
            <Table class="table">
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
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{blog.title.toLocaleUpperCase("tr-TR")}</td>
                                <td>{blog.img}</td>
                                <td>{blog.description}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </div>
    </>
    );
};