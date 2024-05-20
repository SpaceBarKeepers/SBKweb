import React from "react";
import "./projectManagementDetail.scss"

const ProjectManagementDetail = ({project}) => {
    return (
        <div className={"pmDetail"}>
            <div className={"projectHeader"}>
                <div>
                    {project.projectName && <h1>{project.projectName}</h1>}
                    {project.customerName && <h3>Objednatel: {project.customerName}</h3>}
                </div>
                <div className={"projectState"}>
                    {project.state && <StatusIcon status={project.state}/>}
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Task/subtask</th>
                    <th>Status</th>
                    <th>Předpokládaný termín</th>
                </tr>
                </thead>
                <tbody>
                {project?.modules?.length && project.modules.map((module) => (
                    <React.Fragment key={module.name}>
                        <tr className={"module_taskRow"}>
                            <td className={"taskName"}>{module.name}</td>
                            <td className={"taskState"}>{<StatusIcon status={module.state}/>}</td>
                            <td>{module.finishedAt}</td>
                        </tr>
                        {module?.tasks?.length && module.tasks.map((task) => (
                            <tr key={task.name}>
                                <td className={"submodule_taskName taskName"}>{task.name}</td>
                                <td className={"taskState"}>{task.state}</td>
                                <td>{task.finishedAt}</td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const StatusIcon = ({status}) => {
    console.log(status);
    return (
        <>
            {status === "done" &&
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
            }
            {status === "working" &&
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 576 512">
                    <path
                        d="M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2H288c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7h32l22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V405.1l-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"/>
                </svg>
            }
            {status === "queue" &&
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path
                        d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"/>
                </svg>
            }
        </>
    );
}

export default ProjectManagementDetail;