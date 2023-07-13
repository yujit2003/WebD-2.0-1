import gif from '../../assets/images/blog_hero.gif'

const BlogHero = () => {

  return (
<>
<div className="w-full bg-center bg-cover h-[36rem]" style={{backgroundImage: `url(${gif})`}}>
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
            <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
                        EMR&nbsp;
                    </span>

                    <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
                        BLOG
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                Embark on a journey through our captivating blogosphere
                </p>
                <button className="w-full px-4 py-2 mt-14 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Explore</button>
            </div>
        </div>
    </div>
</>
  )
}

export default BlogHero;