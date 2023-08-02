import { BiBarcode } from 'react-icons/bi';
import { FcSearch, FcCheckmark, FcCancel } from "react-icons/fc";

const TabelaDadosFakes = () => {
  const dadosFakes = [
    { id: 1, nome: 'João', idade: 25, cidade: 'São Paulo' },
    { id: 2, nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Pedro', idade: 28, cidade: 'Belo Horizonte' },
  ];

  function isEven(num: number): boolean {
    return num % 2 === 0;
  }

  return (
    <div className="h-[200px]">
      <table className="table-auto border-collapse border border-gray-800 w-[70vw]">
        <thead className="">
          <tr className="bg-[#222] text-[#ddd] border-b-2 text-2xl text-left p-10">
            <th className="p-2">ID</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Idade</th>
            <th className="p-2">Cidade</th>
            <th className="p-2 w-[100px] text-center border-l-2">Ação</th>
          </tr>
        </thead>
        <tbody className="h-[150px]">
          {dadosFakes.map((dados, i) => (
            <tr key={dados.id} className={`${isEven(i) ? 'bg-[#cdcdcd]' : 'bg-[#00800055]'} text-2xl border-b-[1px] border-[#222]`}>
              <td className="p-2 text-left]">
                <FcCheckmark className='text-4xl' color="red" />  
              </td>
              <td className="p-2 text-left">{dados.nome}</td>
              <td className="p-2 text-left">{dados.idade}</td>
              <td className="p-2 text-left">{dados.cidade}</td>
              <td className="h-20 flex flex-row justify-center">
                <button title="Seriar" className="text-4xl">
                  <BiBarcode />
                </button>
                <button title="Ver detales" className="text-4xl">
                  <FcSearch />
                </button>
                <button className="text-4xl">
                  <FcCancel />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDadosFakes;
