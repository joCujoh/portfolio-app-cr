import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 头像部分 */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-600 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-8xl font-bold text-gray-300">P</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                <span>开发者</span>
              </div>
            </div>
          </div>
          
          {/* 文本内容部分 */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                你好，我是
              </span>
              <br />
              <span className="text-white">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              一位充满激情的前端开发者，专注于创建美观、功能强大且用户友好的应用程序。
              我致力于使用最新的技术和最佳实践来构建卓越的用户体验。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
                查看项目
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-400 font-medium rounded-full hover:bg-purple-600/20 transition-all duration-300">
                联系我
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 向下滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;