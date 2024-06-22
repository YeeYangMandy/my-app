/**
 * @author Yang Yi <oprtigk@gmail.com>
 */

import { useState } from 'react';
import { Card } from 'flowbite-react';
import { StyledButton } from './Styled';

export default function CustomCard({ item }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Card
      renderImage={() => (
        <img src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.ScenicSpotName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-[#F7E3DA] text-justify">
        {item.Description}
      </p>
      <StyledButton onClick={toggleModal}>
        <div>
          <span>詳細資訊</span>
          <span>詳細資訊</span>
        </div>
      </StyledButton>
      <StyledButton href={item.MapUrl} target="_blank">
        <div>
          <span>Google map</span>
          <span>Google map</span>
        </div>
      </StyledButton>

      {showModal && (
        <div id="default-modal" className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.ScenicSpotName}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400 text-justify">
                  介紹：<br/>{item.DescriptionDetail}
                </p>
                <p className="text-base leading-relaxed text-gray-900 dark:text-gray-400 text-justify">
                  地點：<br/>{item.Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
