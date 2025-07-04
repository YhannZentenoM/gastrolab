import { useState } from 'react';
import { EXAMENES_NOMBRE } from '../data/enfermedadesNombre';
import ModalPruebas from './ModalPruebas';

const TablaExamenes = ({ examenes }) => {
  const mitad = Math.ceil(examenes.length / 2);
  const primeraMitad = examenes.slice(0, mitad);
  const segundaMitad = examenes.slice(mitad);

  const [isActive, setIsActive] = useState(false);
  const [itemData, setItemData] = useState(null);

  const renderTabla = (datos) => (
    <table>
      <thead>
        <tr>
          <th className='w-24 text-xl py-2'>Código</th>
          <th className='text-xl py-2'>Nombre del exámen</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, idx) => (
          <tr
            key={idx}
            className='border-b border-black/10 cursor-pointer hover:bg-zinc-100 transition-colors duration-300'
            onClick={() => {
              setIsActive(true);
              setItemData(item);
            }}
          >
            <td className='text-sm text-black/70 py-3 px-5'>{item.code}</td>
            <td className='text-sm text-black/70 py-3 px-5'>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='flex-1'>{renderTabla(primeraMitad)}</div>
      <div className='flex-1'>{renderTabla(segundaMitad)}</div>
      <ModalPruebas
        info={itemData}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
};

const BuscadorExamenes = () => {
  const [tipoFilter, setTipoFilter] = useState('nombre');

  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-14 px-5 md:px-0'>
        <div className='w-full'>
          <div className='relative flex md:items-end md:justify-end'>
            <input
              type='search'
              className='border border-black/50 rounded-xl w-[80%] md:w-full p-3 text-black/70 placeholder:text-black/40 focus:border-primary focus:outline-none'
              placeholder='Ingresa el nombre de la enfermedad'
            />
            <button className='absolute bottom-0 -right-1 md:-right-10 bg-primary border border-primary font-bold text-base rounded-full w-32 md:w-48 py-3 text-white transition-colors duration-300 uppercase cursor-pointer hover:bg-white hover:text-primary hover:border hover:border-primary'>
              Buscar
            </button>
          </div>
        </div>
        <div className='w-full text-right'>
          <button className='bg-primary border border-primary font-bold text-base rounded-2xl py-3 px-5 pl-20 text-white transition-all duration-300 relative cursor-pointer hover:drop-shadow-primary-card'>
            <img
              src='/recursos/file.png'
              alt='archivo'
              className='w-12 absolute left-5 -top-5'
            />
            Decarga el formato de tus solicitudes aquí
          </button>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-5 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
          <button
            className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group hover:drop-shadow-primary-card transition-all duration-500'
            onClick={() => setTipoFilter('nombre')}
          >
            <img
              src={`/recursos/adn.webp`}
              alt='por nombre'
              className='h-10 md:h-20 group-hover:scale-110 transition-all duration-300'
            />
            <div className='text-white w-full text-right'>
              <h3 className='text-2xl md:text-4xl font-semibold mb-1'>
                Por Nombre
              </h3>
            </div>
          </button>
          <button className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group group hover:drop-shadow-primary-card transition-all duration-500'>
            <img
              src={`/recursos/enfermedad.webp`}
              alt='Por Enfermedad'
              className='h-10 md:h-24 group-hover:scale-110 transition-all duration-300'
            />
            <div className='text-white w-full text-right'>
              <h3 className='text-2xl md:text-4xl font-semibold mb-1'>
                Por Enfermedad
              </h3>
            </div>
          </button>
          <button className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group group hover:drop-shadow-primary-card transition-all duration-500'>
            <img
              src={`/recursos/condicion.webp`}
              alt='Por Síndrome'
              className='h-10 md:h-24 group-hover:scale-110 transition-all duration-300'
            />
            <div className='text-white w-full text-right'>
              <h3 className='text-2xl md:text-4xl font-semibold mb-1'>
                Por Síndrome
              </h3>
            </div>
          </button>
          <button className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group group hover:drop-shadow-primary-card transition-all duration-500'>
            <img
              src={`/recursos/examen.webp`}
              alt='Exámenes nuevos'
              className='h-10 md:h-24 group-hover:scale-110 transition-all duration-300'
            />
            <div className='text-white w-full text-right'>
              <h3 className='text-2xl md:text-4xl font-semibold mb-1'>
                Exámenes nuevos
              </h3>
            </div>
          </button>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-14'>
        {/* {tipoFilter === 'nombre' && TablaExamenes(EXAMENES_NOMBRE)} */}
        {tipoFilter === 'nombre' && (
          <TablaExamenes examenes={EXAMENES_NOMBRE} />
        )}
      </div>
    </>
  );
};

export default BuscadorExamenes;
