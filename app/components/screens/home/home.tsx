import Layout from "@/components/layout/layout"
import { FC } from "react"
import { IHome } from "./home.interface"

const Home:FC<IHome> = () =>{
    return (
        <Layout>
            <h1>Home page</h1>
        </Layout>
    )
}

export default Home