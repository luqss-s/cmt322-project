import Navbar from '../navbar';

export default function Home() {
  return (
    <div className="bg-black h-screen">
    <Navbar></Navbar>
      <section className="mt-20 text-green-600">
        <h3 className="text-3xl font-bold text-center mb-4">Get in touch</h3>
        <p className="text-center text-white mb-10 md:mb-12 mx-auto max-w-3xl">
          Please feel free to get in touch if you have any questions or inquiries about our EV book system app; we’d be happy to assist you.
        </p>
        <div className="md:flex md:flex-wrap">
          <div className="xl:w-6/12 md:w-7/12 mb-6 lg:mb-0 md:pr-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.423231398028!2d100.29959697598383!3d5.35219973566337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1aa4c93d027%3A0xe5c26762ae7882b6!2sUniversity%20Heights%20Apartment%2C%20Kampung%20Dua%20Bukit%2C%2011700%20Gelugor%2C%20Pulau%20Pinang!5e0!3m2!1sen!2smy!4v1703453550347!5m2!1sen!2smy"
              className="h-80 w-full border-0 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="xl:w-6/12 md:w-5/12 md:pl-3">
            <div className="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-4 md:gap-x-6">
              <div className="mb-10 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Technical support</p>
                    <p className="text-gray-500">SolarBook@gmail.com</p>
                    <p className="text-gray-500">+03 8000 8000</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                        <path fill="currentColor" d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Sales questions</p>
                    <p className="text-gray-500">SolarBookAdmin@gmil.com</p>
                    <p className="text-gray-500">+03 9000 9000</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M416 32H96c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h160l96 64V416h64c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM272 336l-48-32H96c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h128l48-32 160 160H272z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Feedback</p>
                    <p className="text-gray-500">solarbook.feedback@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
