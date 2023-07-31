interface ICustomProps {
    label: string;
    image: string;
}

const CustomOptions = ({label, image}: ICustomProps) => {
    return (
        <div className="">
            <button>
                <span>{label}</span>
                <img className="w-20 h-16" src={image} />
            </button>
        </div>
    )
}

export default CustomOptions