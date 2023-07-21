

const SideBar = () => {
    return (
        <div className="bg-[#222] h-[135%] w-[20%] absolute left-0 flex flex-col items-center">
            <h2 className='mt-10 text-4xl font-[Poppins] text-[#ff5510] font-bold'>Admin</h2>
            <button className="mt-20 text-4xl font-[Poppins] text-[#ddd]">
                Compras
            </button>
            <button className="mt-20 text-4xl font-[Poppins] text-[#ddd]">
                Pedidos
            </button>
            <button className="mt-20 text-4xl font-[Poppins] text-[#ddd]">
                Produtos
            </button>
            <button className="mt-20 text-4xl font-[Poppins] text-[#ddd]">
                Conta
            </button>
        </div>
    )
}

export default SideBar