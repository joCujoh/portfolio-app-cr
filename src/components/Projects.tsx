import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // 可选的图片URL，如果没有则显示占位符
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: '电商网站',
      description: '一个全功能的电商平台，具有购物车、支付集成和用户管理系统。使用现代前端技术构建，提供流畅的用户体验。',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: '任务管理应用',
      description: '一款高效的任务管理工具，支持团队协作、进度跟踪和自动化工作流，帮助团队提升生产力。',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: '数据分析仪表板',
      description: '实时数据可视化仪表板，支持多种图表类型和自定义报告，帮助企业做出数据驱动的决策。',
      technologies: ['React', 'D3.js', 'Python', 'Express'],
    },
    {
      id: 4,
      title: '移动健身应用',
      description: '一款跨平台的健身追踪应用，提供个性化训练计划、营养建议和社区功能。',
      technologies: ['React Native', 'Redux', 'GraphQL'],
    },
    {
      id: 5,
      title: '在线学习平台',
      description: '提供丰富的课程资源和互动学习体验，在线教育平台支持视频播放、测验和证书颁发。',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
    },
    {
      id: 6,
      title: '智能聊天机器人',
      description: '基于自然语言处理的智能客服系统，能够理解和回答常见问题，提高客户服务效率。',
      technologies: ['Python', 'TensorFlow', 'NLP', 'WebSocket'],
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              我的项目
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            以下是我开发的一些精选项目，展示了我在不同技术领域的技能和经验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
            >
              {/* 项目截图占位区域 */}
              <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="relative z-10 text-center">
                  <div className="mx-auto bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg inline-block mb-3">
                    <div className="bg-gray-800 rounded-md p-4">
                      <div className="text-4xl text-gray-300 font-bold">{project.title.charAt(0)}</div>
                    </div>
                  </div>
                  <p className="text-gray-400">项目截图</p>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.technologies[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-500/30 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="text-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                    查看演示
                  </button>
                  <button className="text-sm px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;