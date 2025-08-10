import { useState } from 'react';
import { EXAMENES_NOMBRE } from '../data/enfermedadesNombre';
import ModalPruebas from './ModalPruebas';

const TablaExamenesSeccion = (examenes) => {
  const mitad = Math.ceil(examenes?.length / 2);
  const primeraMitad = examenes?.slice(0, mitad);
  const segundaMitad = examenes?.slice(mitad);

  const [isActive, setIsActive] = useState(false);
  const [itemData, setItemData] = useState(null);

  const renderTabla = (datos) => (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='text-xl py-2'>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((sec, idx) => (
          <tr
            key={idx}
            className='border-b border-black/10 cursor-pointer'
          >
            <td>
              <details name='acordeon'>
                <summary className='py-2'>{sec.seccion}</summary>
                <div>
                  {sec.examenes
                    .sort((a, b) => a.code.localeCompare(b.code))
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className='border-b border-black/10 cursor-pointer hover:bg-zinc-100 transition-colors duration-300 flex justify-between items-center'
                        onClick={() => {
                          setIsActive(true);
                          setItemData(item);
                        }}
                      >
                        <span className='text-sm text-black/70 py-3 px-5'>
                          {item.code}
                        </span>
                        <span className='text-sm text-black/70 py-3 px-5'>
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              </details>
            </td>
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

const TablaExamenesEnfermedad = (examenes) => {
  const mitad = Math.ceil(examenes?.length / 2);
  const primeraMitad = examenes?.slice(0, mitad);
  const segundaMitad = examenes?.slice(mitad);

  const [isActive, setIsActive] = useState(false);
  const [itemData, setItemData] = useState(null);

  const renderTabla = (datos) => (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='text-xl py-2'>Nombre enfermedad</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((enf, idx) => (
          <tr
            key={idx}
            className='border-b border-black/10 cursor-pointer'
          >
            <td>
              <details name='acordeon'>
                <summary className='py-2'>{enf.enfermedad}</summary>
                <div>
                  {enf.examenes
                    .sort((a, b) => a.code.localeCompare(b.code))
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className='border-b border-black/10 cursor-pointer hover:bg-zinc-100 transition-colors duration-300 flex justify-between items-center'
                        onClick={() => {
                          setIsActive(true);
                          setItemData(item);
                        }}
                      >
                        <span className='text-sm text-black/70 py-3 px-5'>
                          {item.code}
                        </span>
                        <span className='text-sm text-black/70 py-3 px-5'>
                          {item.name}
                        </span>
                      </div>
                    ))}
                </div>
              </details>
            </td>
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

const TablaExamenes = (examenes) => {
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
  const [search, setSearch] = useState('');
  const [examenesFiltrados, setExamenesFiltrados] = useState(EXAMENES_NOMBRE);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSeach = (e) => {
    e.preventDefault();
    setExamenesFiltrados(
      filtrarExamenesConTabsFiltrados(EXAMENES_NOMBRE, search)
    );
  };

  const filtrarExamenesConTabsFiltrados = (examenes, searchTerm) => {
    const lowerTerm = searchTerm.toLowerCase();

    return examenes
      .map((examen) => {
        const matchMain =
          (examen.code && examen.code.toLowerCase().includes(lowerTerm)) ||
          (examen.name && examen.name.toLowerCase().includes(lowerTerm));

        let filteredTabs = examen.tabs;

        if (Array.isArray(examen.tabs)) {
          filteredTabs = examen.tabs.filter(
            (tab) =>
              (tab.code && tab.code.toLowerCase().includes(lowerTerm)) ||
              (tab.label && tab.label.toLowerCase().includes(lowerTerm))
          );
        }

        if (matchMain) {
          // Devuelve examen completo (con todos los tabs si los tiene)
          return examen;
        } else if (filteredTabs && filteredTabs.length > 0) {
          // Devuelve examen pero solo con los tabs que coinciden
          return { ...examen, tabs: filteredTabs };
        }

        return null; // No hay match
      })
      .filter(Boolean); // Quita los null
  };

  const groupByEnfermedad = (data) => {
    const grupos = {};
    data?.forEach((item) => {
      item?.enfermedad?.forEach((enf) => {
        if (!grupos[enf]) {
          grupos[enf] = [];
        }
        grupos[enf].push(item);
      });
    });

    return Object.entries(grupos)
      .map(([enfermedad, examenes]) => ({
        enfermedad,
        examenes,
      }))
      .sort((a, b) => a.enfermedad.localeCompare(b.enfermedad));
  };

  const groupBySeccion = (data) => {
    const grupos = {};
    data?.forEach((item) => {
      item?.seccion?.forEach((sec) => {
        if (!grupos[sec]) {
          grupos[sec] = [];
        }
        grupos[sec].push(item);
      });
    });

    return Object.entries(grupos)
      .map(([seccion, examenes]) => ({
        seccion,
        examenes,
      }))
      .sort((a, b) => a.seccion.localeCompare(b.seccion));
  };

  const handleSelectTipo = (tipo) => {
    setTipoFilter(tipo);
    if (tipo === 'enfermedad') {
      setExamenesFiltrados(groupByEnfermedad(EXAMENES_NOMBRE));
    }
    if (tipo === 'nombre') {
      setExamenesFiltrados(EXAMENES_NOMBRE);
    }
    if (tipo === 'seccion') {
      setExamenesFiltrados(groupBySeccion(EXAMENES_NOMBRE));
    }
  };

  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-14 px-5 md:px-0'>
        <div className='w-full'>
          <form
            onSubmit={handleSeach}
            className='relative flex md:items-end md:justify-end'
          >
            <input
              type='search'
              className='border border-black/50 rounded-xl w-[80%] md:w-full p-3 text-black/70 placeholder:text-black/40 focus:border-primary focus:outline-none'
              placeholder='Ingresa lo que estás buscando'
              onChange={handleChange}
            />
            <button
              type='submit'
              className='absolute bottom-0 -right-1 md:-right-10 bg-primary border border-primary font-bold text-base rounded-full w-32 md:w-48 py-3 text-white transition-colors duration-300 uppercase cursor-pointer hover:bg-white hover:text-primary hover:border hover:border-primary'
            >
              Buscar
            </button>
          </form>
        </div>
        <div className='w-full text-right'>
          <a
            href='http://www.gastrolabperu.com/userfiles/cms/examen/documento/formulario-de-solicitud-de-examenes-2016.pdf'
            target='_blank'
            className='bg-primary border border-primary font-bold text-base rounded-2xl py-3 px-5 pl-20 text-white transition-all duration-300 relative cursor-pointer hover:drop-shadow-primary-card'
          >
            <img
              src='/recursos/file.png'
              alt='archivo'
              className='w-12 absolute left-5 -top-5'
            />
            Clic aquí para solicitar exámenes
          </a>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-5 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-14'>
          <button
            className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group hover:drop-shadow-primary-card transition-all duration-500'
            onClick={() => handleSelectTipo('nombre')}
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
          <button
            className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group group hover:drop-shadow-primary-card transition-all duration-500'
            onClick={() => handleSelectTipo('enfermedad')}
          >
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
          <button
            className='bg-primary rounded-4xl flex justify-between items-center py-3 px-14 cursor-pointer group group hover:drop-shadow-primary-card transition-all duration-500'
            onClick={() => handleSelectTipo('seccion')}
          >
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
        {tipoFilter === 'nombre' && TablaExamenes(examenesFiltrados)}
        {tipoFilter === 'enfermedad' &&
          TablaExamenesEnfermedad(examenesFiltrados)}
        {tipoFilter === 'seccion' && TablaExamenesSeccion(examenesFiltrados)}
      </div>
    </>
  );
};

export default BuscadorExamenes;
