import { useState } from "react";
import styles from "./Dashboard.module.css"
import MasonryLayout from '../Components/MasonryLayout/MasonryLayout';
import ContainerCard from '../Components/ContainerCard/ContainerCard';
import Dropdown from '../Components/Elements/Dropdown/Dropdown';
import Header from "../Components/Header/Header";
import images from "../Jsons/Images.json"
import { useSelector } from "react-redux";


const Dashboard = () => {

    const { files } = useSelector((store) => store.fileList);


    const [categoryImage, setCategoryImage] = useState(images.categories.all)
    const takeDdTitle = (ddTitle) => {
        setCategoryImage(() => {
            let categoryChoose = Object.keys(images.categories).filter(item => {
                const titleSplited = ddTitle.toLowerCase().split(" ")[0]
                return item.toLowerCase().includes(titleSplited)
            })
            return [...images.categories[categoryChoose]]
        })
    }

    return (
        <>
            <Header />
            <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>

                <div style={{ color: "white" }}>


                </div>
                <ContainerCard>
                    <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                        <h1>All Books</h1>
                        <Dropdown title="All Books" files={files} liftingDdTextUp={takeDdTitle} />
                    </div>
                    <MasonryLayout images={categoryImage} files={files} />
                </ContainerCard>
            </div>
        </>
    )
}

export default Dashboard