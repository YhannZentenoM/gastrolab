import { useState } from 'react';

const TabsResponsive = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full'>
      {/* Tabs Header */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-full text-sm text-center py-3 px-4 rounded-lg transition-all font-semibold ${
              activeIndex === index
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className='mt-6 p-4 bg-white border border-zinc-400 rounded-lg shadow-inner min-h-[100px]'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 border-b border-black/20'>
          <div className='flex items-center justify-start gap-10 flex-1'>
            <p className='text-sm text-left text-black/70 py-3 px-5'>
              <strong>Sección:</strong> {tabs[activeIndex]?.seccion}
            </p>
            <p className='text-sm text-left text-black/70 py-3 px-5'>
              <strong>Código:</strong> {tabs[activeIndex]?.code}
            </p>
          </div>
          <div>
            {tabs[activeIndex]?.document && (
              <ButtonDownload url={tabs[activeIndex]?.document} />
            )}
          </div>
        </div>
        {/* {tabs[activeIndex]?.content} */}
        <TablePruebas info={tabs[activeIndex]?.content} />
      </div>
    </div>
  );
};

const ButtonDownload = ({ url }) => {
  return (
    <a
      href={url}
      className='bg-primary btn-download rounded-full px-7 py-2 border border-primary transition-colors duration-300 uppercase hover:bg-white hover:text-primary hover:border hover:border-primary block text-center drop-shadow-xl drop-shadow-primary/30 text-xs'
    >
      Descargar
    </a>
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
        a {
          color: #0070f3;
          font-weight: 600;
        }
        .btn-download {
          color: #ffffff !important;
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

export default TabsResponsive;
