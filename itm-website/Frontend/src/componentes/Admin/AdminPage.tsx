import AdminForm from './AdminForm'
import CustomTable from './CustomTable'
import SideBar from './SideBar'

const AdminPage = () => {
    return (
        <div className='h-[135%] flex'>
            <div className=''>
                <input className='bg-orange-600'></input>
            </div>
            <SideBar />
            <div className="flex flex-col items-center justify-center ml-[15%] mr-[15%]">
                <AdminForm />
                <CustomTable />
            </div>
        </div>
    )
}

export default AdminPage