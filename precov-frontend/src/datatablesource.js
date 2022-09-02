import { dividerClasses } from "@mui/material"

export const userColumns = [
    { field: 'nomor', headerName: 'No', width: 70 },
    // {field: 'id', headerName: 'id', width: 70 },
     {
        field: "nama", headerName: "Nama", width: 230,
        //  renderCell:(param)=>{
        //     return(
        //         <div className="cellWithImg">
        //             <img className="cellImg" src={param.row.img} alt="avatar"/>
        //             {param.row.username}
        //         </div>
        //     );
        // },
    },
    {
        field:"username", headerName:"Username",width: 150,
    },
    // {
    //     field:"password", headerName:"Password",width: 230,
    // },
    {
        field:"email", headerName:"Email",width: 200,
    },
    {
        field:"region", headerName:"Region",width: 150,
    },
    {
        field:"no_hp", headerName:"Phone",width: 150,
    },

    // {
    //     field:"status", headerName:"Status",width: 160,
    //     renderCell:(param)=>{
    //         return(
    //             <div className={`cellWithStatus ${param.row.status}`}>
    //                 {param.row.status}
    //             </div>
    //         )
    //     }
    // }
]
//temp datas

export const userRows = [
    {
        id: 1,
        nama: "Superadmin",
        username: "Snow",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Yogyakarta",
        no_hp: "0876898726",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        nama: "Masur",
        username: "Mansur",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Surabaya",
        no_hp: "088767543232",
        email: "mansur@gmail.com",
        age: 35,
    },
    {
        id: 3,
        nama: "Yaqin",
        username: "Yaqin",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Yogyakarta",
        no_hp: "085224324541",
        email: "yaqin@gmail.com",
        age: 35,
    },
    {
        id: 4,
        nama: "Anggun",
        username: "Anggun",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Yogyakarta",
        no_hp: "0876898726",
        email: "Anggun@gmail.com",
        age: 35,
    },
    {
        id: 5,
        nama: "roby",
        username: "roby",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Solo",
        no_hp: "0876898726",
        email: "roby@gmail.com",
        age: 35,
    },
    {
        id: 6,
        nama: "Taufan",
        username: "taufan",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Yogyakarta",
        no_hp: "0876898726",
        email: "taufan@gmail.com",
        age: 35,
    },
    {
        id: 7,
        nama:"Sony",
        username: "Sony",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Solo",
        no_hp: "0876898726",
        email: "sony@gmail.com",
        age: 35,
    },
    {
        id: 8,
        nama:"Susi",
        username: "Susi",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Surabaya",
        no_hp: "0876898726",
        email: "susi@gmail.com",
        age: 35,
    },
    {
        id: 9,
        nama:"Andi,",
        username: "Andi",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region: "Semarang",
        no_hp: "0876898726",
        email: "andi@gmail.com",
        age: 35,
    },
    {
        id: 10,
        nama: "nur",
        username: "Nur",
        img: "https://images.pexels.com/photos/2901916/pexels-photo-2901916.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901916.jpg&fm=jpg",
        status: "active",
        region:"samarinda",
        no_hp:"088777666555",
        email: "Nur@gmail.com",
        age: 35,
    },

]