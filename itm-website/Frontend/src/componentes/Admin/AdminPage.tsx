import CustomTable from './CustomTable'
import SideBar from './SideBar'

const AdminPage = () => {
    return (
        <div className='h-[135%] flex'>
            <div className=''>
                <input className='bg-orange-600'></input>
            </div>
            <SideBar />
            <CustomTable />
        </div>
    )
}

export default AdminPage