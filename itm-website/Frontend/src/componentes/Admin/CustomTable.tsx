// src/components/TabelaDadosFakes.js
const TabelaDadosFakes = () => {
  const dadosFakes = [
    { id: 1, nome: 'João', idade: 25, cidade: 'São Paulo' },
    { id: 2, nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { id: 3, nome: 'Pedro', idade: 28, cidade: 'Belo Horizonte' },
  ];

  return (
    <div className="h-[200px] mt-[30%] ml-[15%]">
      <table className="table-auto border-collapse border rounded-sm border-gray-800 w-[70vw]">
        <thead className="">
          <tr className="bg-[#222] text-[#ddd] border-b-2 text-4xl text-left p-10">
            <th className="p-2">ID</th>
            <th className="p-2">Nome</th>
            <th className="p-2">Idade</th>
            <th className="p-2">Cidade</th>
            <th className="p-2 w-[100px] text-center">Ação</th>
          </tr>
        </thead>
        <tbody className="h-[150px]">
          {dadosFakes.map((dados) => (
            <tr key={dados.id} className="odd:bg-gray-100 text-2xl border-b-[1px] border-[#222]">
              <td className="p-2 text-left]">{dados.id}</td>
              <td className="p-2 text-left">{dados.nome}</td>
              <td className="p-2 text-left">{dados.idade}</td>
              <td className="p-2 text-left">{dados.cidade}</td>
              <td className="flex flex-row justify-evenly items-center">
                <button className="pl-3">X</button>
                <button className="pl-3">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaDadosFakes;
