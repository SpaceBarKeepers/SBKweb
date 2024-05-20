import {Navigate, useParams} from "react-router-dom";
import ProjectManagementDetail from "../../components/ProjectManagementDetail/ProjectManagementDetail";
import ctr from "../../data/pm/ctr.json";

const ProjectManagementPage = () => {
    const { id } = useParams();

    return id === "ctr"
        ? <ProjectManagementDetail project={ctr} />
        : <Navigate to={"/"} />;
}

export default ProjectManagementPage;