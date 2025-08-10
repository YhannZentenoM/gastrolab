import { useEffect } from 'react';
import TabsPruebas from './TabsPruebas';

const ModalPruebas = ({ info, isActive, setIsActive }) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'; // Bloquea scroll del fondo
    } else {
      document.body.style.overflow = ''; // Restaura scroll normal
    }

    // Limpieza por si el componente se desmonta
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className='fixed inset-0 bg-[conic-gradient(at_top_right,rgba(204,249,223,0.8),rgba(209,214,255,0.8))] items-center justify-center z-50 flex overflow-y-auto'>
      <div className='bg-white w-full max-w-7xl rounded-lg shadow-lg relative p-6 max-h-[90vh] overflow-y-auto'>
        <button
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer'
          onClick={() => setIsActive(false)}
        >
          &times;
        </button>
        {/* ENCABEZADO STICKY */}
        <div className='sticky top-0 bg-white z-10 pb-2'>
          <h3 className='text-2xl font-bold text-dark text-primary-light mb-1 px-5'>
            {info.name}
          </h3>
          <div className='flex flex-col md:flex-row items-center justify-between gap-10 border-b border-black/20'>
            <div className='flex items-center justify-start gap-10 flex-1'>
              <p className='text-sm text-left text-black/70 py-3 px-5'>
                <strong>Sección:</strong>{' '}
                {Array.isArray(info.seccion)
                  ? info.seccion?.join(', ')
                  : info.seccion}
              </p>
              <p className='text-sm text-left text-black/70 py-3 px-5'>
                <strong>Código:</strong> {info.code}
              </p>
            </div>
            <div className='inline-flex gap-x-2'>
              {info.document && (
                <a
                  href={info.document}
                  target='_blank'
                  className='bg-primary inline-flex items-center justify-center gap-x-2 border border-primary font-bold text-sm rounded-2xl py-2 px-4 text-white transition-all duration-300 cursor-pointer hover:drop-shadow-primary-card'
                >
                  <img
                    src='/recursos/pdf.svg'
                    alt='Descargar ficha'
                    className='h-6 w-6'
                  />
                  Descargar ficha
                </a>
              )}
              <a
                href={`https://api.whatsapp.com/send?phone=+51988801315&text=Hola,%20Solicito%20exámenes:%20${info.name}`}
                target='_blank'
                className='bg-[#25D366] inline-flex items-center justify-center gap-x-2 border border-[#25D366] font-bold text-sm rounded-2xl py-2 px-4 text-white transition-all duration-300 cursor-pointer hover:drop-shadow-[#25D366]-card'
              >
                <img
                  src='/recursos/whatsapp.svg'
                  alt='Solicitar exámenes'
                  className='h-6 w-6'
                />
                Solicitar exámenes
              </a>
            </div>
          </div>
        </div>

        {/* CONTENIDO SCROLLABLE */}
        <div className='overflow-y-auto max-h-[60vh] mt-4'>
          {info.tabs ? (
            <TabsPruebas tabs={info.tabs} />
          ) : (
            <TablePruebas info={info.description} />
          )}
        </div>
      </div>
    </div>
  );
};

const TablePruebas = ({ info }) => {
  return (
    <>
      <style>
        {`
        ul,ol {
          list-style-position: inside;
        }
        ul li {
          list-style-type: disc;
        }
        ol li {
          list-style-type: decimal;
        }
        ol li, ul li {
          padding-left: 1.2em;
          text-indent: -1.2em;
        }
        table a {
          color: #0070f3;
          font-weight: 600;
        }
      `}
      </style>
      <table className='w-full'>
        <tbody>
          {info?.map((item, idx) => (
            <tr
              key={idx}
              className='border-b border-black/10'
            >
              <td className='text-sm text-black/70 py-3 px-5 font-bold'>
                {item.title}
              </td>
              <td className='text-sm text-black/70 py-3 px-5'>
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ModalPruebas;
