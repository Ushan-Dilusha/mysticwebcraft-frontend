import React , {useRef} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Typed from 'react-typed';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import heroImg3 from './heroImg3.jpg'

function Home() {

  const targetComponentRef = useRef(null);

  const scrollToComponent = () => {
    window.scrollTo({
      top: targetComponentRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className='h-full'>
      <div className="bg-white ">
        <Header />
        <header className="flex py-0 pt-0 text-center text-black  bg-gradient-to-br from-blue-300 to-blue-50">
          <div className="container w-1/2 mx-auto">
          <img src={heroImg3} alt='image1'/>
            </div>
            <div className='flex items-center justify-center w-1/2'>
          <div className="container mx-auto">
            <h1 className="text-4xl font-semibold">
              Welcome To{ ''}
              <Typed
                className="text-4xl font-bold text-blue-700 sm:text-4xl"
                strings={[' MYSTICWEBCRAFT']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />{' '}
            </h1>
            <p className="mt-2 text-lg">Empowering Students Through Knowledge</p>
            <button onClick={scrollToComponent} className="px-4 py-2 mt-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">Get Started</button>
          </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto" > {/* Add mb-16 (margin-bottom) */}
        
          <section className="m-0 text-center">
            {/* <div className="mb-10">
              <img
                src={cover}
                alt="Cover Photo"
                className="w-full "
              />
            </div> */}

            {/* ----Card Section ----- */}
            <div className="flex flex-wrap justify-center bg-gradient-to-br from-blue-500 to-blue-100">
              {/* Feature 1 */}
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 h-{200}">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Interactive Lessons</h3>
                  <img src={img1} alt='img2'/>
                  <p className="mt-2 text-gray-600">Engage with interactive Questions. Train your brain </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Code Complexity Analyzer</h3>
                  <img src={img2} alt='img3'/>
                  <p className="mt-2 text-gray-600">Code Complexity Analyzer assesses code intricacy to improve quality.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Community Forum</h3>
                  <img src={img3} alt='img4'/>
                  <p className="mt-2 text-gray-600">Connect with other learners in our community forum.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Progress Tracking</h3>
                  <img src={img4} alt='img5'/>
                  <p className="mt-2 text-gray-600">Monitor your progress and track your achievements.</p>
                </div>
              </div>
            </div>
            {/* ---Call To Action ---- */}
            <section ref={targetComponentRef} className="my-5 text-center">
            <h2 className="mb-3 text-4xl font-semibold">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">Join our platform and embark on a learning journey like never before.</p>
            
          </section>
          </section>
          
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
