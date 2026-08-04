// Language data
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            products: 'Products',
            comparison: 'Comparison',
            applications: 'Applications',
            caseStudies: 'Case Studies',
            certifications: 'Certifications',
            contact: 'Contact',
            news: 'News'
        },
        hero: {
            title: 'Eco-Friendly Manhole Covers',
            titlePrefix: 'Sustainable & Durable',
            subtitle: 'High-strength phenolic composite covers engineered for municipal roads, ports and industrial applications.',
            viewProducts: 'View Products',
            requestQuote: 'Request a Quote'
        },
        features: {
            title: 'Why Choose ACONCN',
            subtitle: 'Premium composite solutions with proven performance',
            antiTheft: {
                title: 'Anti-Theft',
                desc: 'No scrap value, zero metal content.'
            },
            highLoad: {
                title: 'High Load Capacity',
                desc: 'Up to F900 for heavy-duty infrastructure.'
            },
            longLife: {
                title: 'Long Service Life',
                desc: 'Over 25 years of proven performance.'
            },
            sustainable: {
                title: 'Sustainable Materials',
                desc: '80% recycled materials for eco-friendly solutions.'
            },
            warranty: {
                title: '10 Year Warranty',
                desc: 'Free replacement within 10 years.'
            },
            quiet: {
                title: 'Quiet Design',
                desc: 'Noise-free operation, no rattling sounds.'
            },
            intelligent: {
                title: 'Intelligent & Customizable',
                desc: 'Smart and personalized design options.'
            },
            antiEdge: {
                title: 'Anti-Edge Damage',
                desc: 'Reinforced edges prevent chipping.'
            }
        },
        products: {
            title: 'Product Catalog',
            subtitle: 'Complete range of composite infrastructure products',
            viewAll: 'View All Products',
            all: 'All',
            manholeCovers: 'Manhole Covers',
            outdoorProducts: 'Outdoor Products',
            conveyorRollers: 'Conveyor Rollers',
            pipeRepair: 'Pipe Repair',
            inquire: 'Inquire',
            productsShown: 'products shown',
            d400: {
                name: 'D400 Road Manhole Cover',
                desc: 'Designed for urban roads and heavy traffic areas.'
            },
            e600: {
                name: 'E600 Heavy Duty Cover',
                desc: 'For highways and industrial applications.'
            },
            f900: {
                name: 'F900 Airport Cover',
                desc: 'Heavy-duty covers for airports and ports.'
            },
            grating: {
                name: 'Composite Drainage Grating',
                desc: 'Efficient drainage solutions.'
            }
        },
        applications: {
            title: 'Applications',
            subtitle: 'Versatile solutions for various infrastructure needs',
            urban: 'Urban Roads',
            ports: 'Ports & Harbors',
            airports: 'Airports',
            industrial: 'Industrial Zones',
            utility: 'Utility Networks'
        },
        caseStudies: {
            title: 'Proven Infrastructure Projects',
            subtitle: 'Real-world success stories',
            yichang: 'Yichang Municipal Project',
            yichangDesc: 'Over 25,000 composite manhole covers installed since 2001 with failure rate below 0.05%.',
            unitsInstalled: 'Units Installed',
            sinceYear: 'Since Year',
            failureRate: 'Failure Rate',
            comparison: 'Composite vs Cast Iron',
            composite: 'ACONCN Composite',
            compositeDesc: 'Anti-settlement, no edge damage, corrosion resistant',
            castIron: 'Cast Iron',
            castIronDesc: 'Prone to settlement, edge damage, corrosion'
        },
        certifications: {
            title: 'Quality Certifications',
            subtitle: 'Globally recognized standards',
            en124: 'EN 124 Certified',
            sgs: 'SGS Verified',
            iso: 'ISO 9001',
            green: 'Green Label'
        },
        comparison: {
            title: 'Composite vs Cast Iron',
            subtitle: 'See the difference for yourself',
            composite: 'ACONCN Composite',
            compositeDesc: 'Anti-settlement, no edge damage, corrosion resistant',
            castIron: 'Cast Iron',
            castIronDesc: 'Prone to settlement, edge damage, corrosion',
            antiTheft: 'Anti-theft',
            lightweight: 'Lightweight',
            noNoise: 'Noise-free',
            ecoFriendly: 'Eco-friendly',
            theftRisk: 'High theft risk',
            heavy: 'Heavy weight',
            noisy: 'Noisy operation',
            notEco: 'Not eco-friendly',
            noise: 'Noise Comparison',
            noiseDesc: 'Cast iron manhole covers produce noise when vehicles pass over due to settlement and vibration.',
            silentDesc: 'ACONCN composite covers stay level and silent, eliminating noise pollution.',
            tableTitle: 'Detailed Comparison Chart'
        },
        testReports: {
            title: 'Test Reports',
            subtitle: 'Certified quality and performance',
            report40t: '40T Load Test Report',
            report40tDesc: 'D400 load class certification test results',
            report60t: '60T Load Test Report',
            report60tDesc: 'E600 load class certification test results'
        },
        cta: {
            title: 'Start Your Project With ACONCN',
            titlePrefix: 'GET STARTED',
            desc: 'Get expert advice and competitive pricing for your infrastructure projects.'
        },
        common: {
            viewDetails: 'View Details',
            requestQuote: 'Request Quote',
            loadClass: 'Load Class',
            size: 'Size',
            material: 'Material',
            features: 'Features',
            applications: 'Applications',
            address: 'Address',
            businessHours: 'Business Hours'
        },
        footer: {
            products: 'Products',
            services: 'Services',
            company: 'Company',
            contact: 'Contact',
            phone: 'Phone:',
            email: 'Email:',
            address: 'Address:',
            manholeCovers: 'Manhole Covers',
            drainageGrates: 'Drainage Grates',
            customSolutions: 'Custom Solutions',
            aboutUs: 'About Us',
            caseStudies: 'Case Studies',
            certifications: 'Certifications',
            companyDesc: 'High-performance composite infrastructure solutions for global markets.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. All rights reserved.',
            followUs: 'Follow Us'
        },
        productDetail: {
            d400Title: 'D400 Composite Manhole Cover',
            d400Desc: 'Designed for urban roads and heavy traffic areas. Our D400 composite manhole covers provide exceptional durability, anti-theft protection, and long service life.',
            e600Title: 'E600 Heavy Duty Composite Manhole Cover',
            e600Desc: 'Engineered for highways and industrial applications. Our E600 covers meet the highest load requirements with superior strength and reliability.',
            f900Title: 'F900 Airport Composite Manhole Cover',
            f900Desc: 'Heavy-duty covers designed for airports, ports, and other critical infrastructure. Maximum load capacity for the most demanding environments.',
            gratingTitle: 'Composite Drainage Grating',
            gratingDesc: 'Efficient drainage solutions for urban roads, parking lots, and industrial facilities. Lightweight yet strong with excellent water flow.',
            clearOpening: 'Clear Opening',
            frameSize: 'Frame Size',
            temperatureRange: 'Temperature Range',
            serviceLife: 'Service Life',
            recycledContent: 'Recycled Content',
            weight: 'Weight',
            antiTheftFeature: 'Anti-theft design - No scrap value',
            corrosionResistant: 'Corrosion resistant',
            noiseFree: 'Noise-free operation',
            lightweight: 'Lightweight for easy installation',
            ecoFriendly: 'Environmentally friendly materials',
            urbanRoads: 'Urban roads',
            highways: 'Highways',
            municipalDrainage: 'Municipal drainage systems',
            industrialFacilities: 'Industrial facilities',
            ports: 'Ports & Harbors',
            airports: 'Airports',
            heavyIndustrial: 'Heavy industrial zones',
            military: 'Military facilities',
            parking: 'Parking lots'
        },
        about: {
            title: 'About Us',
            subtitle: 'Three decades of innovation in composite materials',
            companyProfile: 'Company Profile',
            manufacturing: 'Manufacturing Excellence',
            quality: 'Quality Assurance',
            globalPresence: 'Global Presence',
            companyDesc1: 'Founded in 1990, Hong Kong Xindong Industrial Co., Ltd. is a technology-driven manufacturer specializing in advanced phenolic composite materials and sustainable infrastructure solutions. With more than three decades of experience in material science and engineering applications, the company focuses on developing high-performance composite products for municipal and industrial infrastructure.',
            companyDesc2: 'Under its flagship brand ACONCN, Hong Kong Xindong Industrial provides composite manhole covers, drainage systems, and related infrastructure components designed to meet the demanding requirements of modern urban environments. These products serve a wide range of applications including municipal road networks, utility systems, ports, industrial facilities, and transportation infrastructure.',
            manufacturingDesc1: 'ACONCN composite manhole covers are manufactured using phenolic composite materials reinforced with glass fiber, incorporating more than 80% recycled industrial materials. Produced through a precision compression molding process, the products provide strong structural performance, corrosion resistance, anti-theft protection, and long service life compared with traditional cast iron alternatives.',
            manufacturingDesc2: 'The company\'s manufacturing operations are supported by modern production facilities located in Shenzhen and in the National Economic and Technological Development Zone of Zhangzhou, Fujian Province. These facilities provide large-scale production capacity, strict quality control, and flexible manufacturing to meet both standard and customized project requirements.',
            qualityDesc1: 'ACONCN products are engineered according to the requirements of the EN 124 load classification system, with available load classes ranging from A15 to F900 for pedestrian areas, roadways, ports, and heavy-duty infrastructure. Typical clear opening sizes include 600 mm, 700 mm, 800 mm, 900 mm, and 1000 mm, with additional custom specifications available upon request.',
            qualityDesc2: 'Quality assurance is supported through rigorous testing and third-party verification by accredited institutions such as the Shenzhen Academy of Metrology & Quality Inspection. Products undergo structural load testing, durability evaluation, and material performance verification to ensure consistent quality and safety.',
            globalPresenceDesc: 'Today, Hong Kong Xindong Industrial Co., Ltd. continues to expand its international presence by providing reliable, environmentally responsible infrastructure materials for partners in Europe, North America, and other global markets. Through continuous innovation in composite technology and sustainable manufacturing, the company is committed to supporting the development of safer, longer-lasting, and more sustainable urban infrastructure.'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch with our team',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            send: 'Send Message',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Composite Infrastructure Solutions',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Business Hours',
            businessHoursDesc: 'Monday - Friday: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Your name',
            emailPlaceholder: 'your@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Tell us about your project requirements...',
            success: 'Thank you! Your email client will open shortly. We will contact you within 24 hours.',
            error: 'Oops! Something went wrong. Please try again later.',
            invalidEmail: 'Please enter a valid email address.'
        },
        news: {
            pageKicker: 'NEWS & BLOG',
            pageTitle: 'Company News & Industry Insights',
            pageDesc: 'Stay updated with the latest developments in composite manhole cover technology, company news and factory showcases.',
            stats: {
                years: 'Years of Experience',
                covers: 'Manhole Covers Installed',
                projects: 'Infrastructure Projects',
                quality: 'Quality Pass Rate'
            },
            latestKicker: 'LATEST NEWS',
            latestTitle: 'Recent Updates & Announcements',
            latestDesc: 'Recent developments and milestones from ACONCN',
            category: {
                company: 'Company',
                product: 'Product',
                industry: 'Industry'
            },
            article1: {
                title: 'ACONCN Completes Major Infrastructure Project in South China',
                desc: 'Our composite manhole covers have been successfully installed in a large-scale urban development project in Guangdong province, demonstrating superior performance...'
            },
            article2: {
                title: 'New Generation F900 Heavy-Duty Manhole Cover Launched',
                desc: 'Introducing our upgraded F900 manhole cover with enhanced load capacity and improved durability for airport and port applications...'
            },
            article3: {
                title: 'Composite Materials Revolutionizing Urban Infrastructure',
                desc: 'How composite manhole covers are replacing traditional cast iron solutions in modern municipal infrastructure projects across Asia...'
            },
            readMore: 'Read More',
            factoryKicker: 'FACTORY TOUR',
            factoryTitle: 'Inside Our Manufacturing Facility',
            factoryDesc: 'Take a visual tour of our modern production facility spanning 45,000 m²',
            factory: {
                entrance: 'Modern Factory Entrance',
                entranceDesc: '45,000 m² production facility in Shenzhen',
                production: 'Automated Production Line',
                productionDesc: 'Advanced compression molding technology',
                quality: 'Quality Control Center',
                qualityDesc: 'ISO 9001 certified testing laboratory',
                raw: 'Raw Material Warehouse',
                rawDesc: '80% recycled materials storage',
                finished: 'Finished Products Area',
                finishedDesc: 'Ready for global shipment',
                testing: 'Load Testing Facility',
                testingDesc: 'EN 124 standard compliance testing',
                workshop: 'Precision Workshop',
                workshopDesc: 'Custom mold manufacturing',
                packaging: 'Packaging Line',
                packagingDesc: 'Eco-friendly packaging solutions',
                logistics: 'Logistics Center',
                logisticsDesc: 'Global shipping and distribution',
                rd: 'R&D Department',
                rdDesc: 'Continuous technology innovation',
                machinery: 'Heavy Machinery',
                machineryDesc: 'High-capacity production equipment',
                floor: 'Production Floor',
                floorDesc: 'Large-scale manufacturing operations'
            },
            blogKicker: 'TECHNICAL BLOG',
            blogTitle: 'Insights & Knowledge',
            blogDesc: 'Technical articles and industry knowledge sharing',
            blog1: {
                title: 'Why Choose Composite Manhole Covers Over Cast Iron?',
                p1: 'When it comes to urban infrastructure projects, the choice between composite and cast iron manhole covers is an increasingly important decision. In this article, we explore the key advantages of composite materials:',
                point1: '<strong>Anti-Theft Design:</strong> Composite covers have no scrap value, making them unattractive to thieves. Cast iron covers are frequently stolen and sold for scrap, creating significant safety hazards.',
                point2: '<strong>Superior Durability:</strong> Our phenolic composite material has a service life of over 25 years, compared to 10-15 years for cast iron. This means lower maintenance costs and fewer replacements.',
                point3: '<strong>Weight Reduction:</strong> Composite covers are 60-70% lighter than cast iron, making installation safer and more efficient. This also reduces transportation costs.',
                point4: '<strong>Environmental Benefits:</strong> Our composites incorporate up to 80% recycled materials, contributing to sustainable infrastructure development.',
                point5: '<strong>Noise Reduction:</strong> Unlike metal covers, composite covers don\'t produce rattling sounds when vehicles pass over them, reducing urban noise pollution.',
                p2: 'With certifications including EN 124, ISO 9001, and SGS, composite manhole covers are becoming the preferred choice for forward-thinking municipalities and infrastructure developers worldwide.'
            },
            blog2: {
                title: 'Understanding EN 124 Standard for Manhole Covers',
                p1: 'The EN 124 standard is the European norm for metal and composite manhole covers and gully tops. It defines load classes and testing requirements that ensure products meet safety and performance standards for different applications:',
                p2: 'All ACONCN manhole covers are tested and certified according to EN 124 standards, ensuring reliable performance in their specified applications. Our quality control processes include third-party testing by accredited institutions.'
            },
            blog3: {
                title: 'The Future of Sustainable Infrastructure: Composite Materials',
                p1: 'As cities worldwide focus on sustainable development goals, the demand for environmentally friendly infrastructure materials continues to grow. Composite manhole covers represent a key solution in this transition:',
                point1: '<strong>Recycled Content:</strong> Up to 80% of our composite material comes from recycled industrial sources, reducing reliance on virgin materials.',
                point2: '<strong>Long Service Life:</strong> With 25+ years of durability, composite covers require fewer replacements, reducing waste generation over the infrastructure lifecycle.',
                point3: '<strong>Corrosion Resistance:</strong> Unlike metal covers, composites never corrode, eliminating the need for protective coatings and reducing environmental impact.',
                point4: '<strong>Lower Carbon Footprint:</strong> The manufacturing process for composite materials produces significantly fewer emissions compared to cast iron production.',
                p2: 'At ACONCN, we are committed to advancing sustainable infrastructure through continuous innovation in composite material technology and manufacturing processes.'
            },
            ctaPrefix: 'GET IN TOUCH',
            ctaTitle: 'Visit Our Factory or Request a Quote',
            ctaDesc: 'Experience our manufacturing capabilities firsthand or get competitive pricing for your next project.',
            ctaBtn: 'Contact Us Today'
        }
    },
    zh: {
        nav: {
            home: '首页',
            about: '关于我们',
            products: '产品',
            comparison: '对比分析',
            applications: '应用领域',
            caseStudies: '工程案例',
            certifications: '认证资质',
            contact: '联系我们',
            news: '新闻中心'
        },
        hero: {
            title: '环保复合材料井盖',
            titlePrefix: '可持续且耐用',
            subtitle: '高强度酚醛复合材料井盖，专为市政道路、港口及工业应用设计。',
            viewProducts: '查看产品',
            requestQuote: '获取报价'
        },
        features: {
            title: '为什么选择ACONCN',
            subtitle: '高品质复合材料解决方案，久经考验',
            antiTheft: {
                title: '防盗设计',
                desc: '无回收价值，不含金属成分。'
            },
            highLoad: {
                title: '高承载能力',
                desc: '最高可达F900，适用于重型基础设施。'
            },
            longLife: {
                title: '超长使用寿命',
                desc: '超过25年的可靠性能。'
            },
            sustainable: {
                title: '环保材料',
                desc: '80%再生材料，环保可持续。'
            },
            warranty: {
                title: '质保10年换新',
                desc: '10年内免费更换。'
            },
            quiet: {
                title: '静音设计',
                desc: '无噪音运行，无响声。'
            },
            intelligent: {
                title: '智能个性化设计',
                desc: '支持智能和个性化定制。'
            },
            antiEdge: {
                title: '防烂边',
                desc: '加强边缘，防止破损。'
            }
        },
        products: {
            title: '产品目录',
            subtitle: '全系列复合材料基础设施产品',
            viewAll: '查看全部产品',
            all: '全部',
            manholeCovers: '井盖',
            outdoorProducts: '室外花箱垃圾箱',
            conveyorRollers: '托辊',
            pipeRepair: '抢修器',
            inquire: '询价',
            productsShown: '个产品',
            d400: {
                name: 'D400道路井盖',
                desc: '适用于城市道路和重型交通区域。'
            },
            e600: {
                name: 'E600重型井盖',
                desc: '适用于高速公路和工业应用。'
            },
            f900: {
                name: 'F900机场井盖',
                desc: '适用于机场和港口的重型井盖。'
            },
            grating: {
                name: '复合排水格栅',
                desc: '高效排水解决方案。'
            }
        },
        applications: {
            title: '应用领域',
            subtitle: '适用于各种基础设施需求的多功能解决方案',
            urban: '城市道路',
            ports: '港口码头',
            airports: '机场',
            industrial: '工业区',
            utility: '公用事业网络'
        },
        caseStudies: {
            title: '工程案例',
            subtitle: '真实成功案例',
            yichang: '宜昌市政项目',
            yichangDesc: '自2001年以来安装超过25,000个复合材料井盖，故障率低于0.05%。',
            unitsInstalled: '安装数量',
            sinceYear: '起始年份',
            failureRate: '故障率',
            comparison: '复合材料 vs 铸铁',
            composite: 'ACONCN复合材料',
            compositeDesc: '防沉降、防烂边、耐腐蚀',
            castIron: '铸铁',
            castIronDesc: '易沉降、易烂边、易腐蚀'
        },
        certifications: {
            title: '认证资质',
            subtitle: '全球认可标准',
            en124: 'EN 124认证',
            sgs: 'SGS认证',
            iso: 'ISO 9001',
            green: '环保认证'
        },
        comparison: {
            title: '复合材料 vs 铸铁',
            subtitle: '亲眼见证差异',
            composite: 'ACONCN复合材料',
            compositeDesc: '防沉降、防烂边、耐腐蚀',
            castIron: '铸铁',
            castIronDesc: '易沉降、易烂边、易腐蚀',
            antiTheft: '防盗',
            lightweight: '重量轻',
            noNoise: '无噪音',
            ecoFriendly: '环保',
            theftRisk: '高被盗风险',
            heavy: '重量重',
            noisy: '噪音大',
            notEco: '不环保',
            noise: '噪音对比',
            noiseDesc: '铸铁井盖因沉降和振动，车辆经过时会产生噪音。',
            silentDesc: 'ACONCN复合材料井盖保持平整安静，消除噪音污染。',
            tableTitle: '详细对比表'
        },
        testReports: {
            title: '检测报告',
            subtitle: '认证质量与性能',
            report40t: '40吨载荷检测报告',
            report40tDesc: 'D400载荷等级认证检测结果',
            report60t: '60吨载荷检测报告',
            report60tDesc: 'E600载荷等级认证检测结果'
        },
        cta: {
            title: '与ACONCN一起开始您的项目',
            titlePrefix: '开始合作',
            desc: '获取专业建议和有竞争力的价格。'
        },
        common: {
            viewDetails: '查看详情',
            requestQuote: '获取报价',
            loadClass: '承载等级',
            size: '尺寸',
            material: '材质',
            features: '特点',
            applications: '应用',
            address: '地址',
            businessHours: '营业时间'
        },
        footer: {
            products: '产品',
            services: '服务',
            company: '公司',
            contact: '联系',
            phone: '电话:',
            email: '邮箱:',
            address: '地址:',
            manholeCovers: '井盖',
            drainageGrates: '排水格栅',
            customSolutions: '定制方案',
            aboutUs: '关于我们',
            caseStudies: '工程案例',
            certifications: '认证资质',
            companyDesc: '高性能复合材料基础设施解决方案，服务全球市场。',
            copyright: '&copy; 2024 香港欣东实业有限公司 版权所有。',
            followUs: '关注我们'
        },
        productDetail: {
            d400Title: 'D400复合材料井盖',
            d400Desc: '专为城市道路和重型交通区域设计。我们的D400复合材料井盖提供卓越的耐久性、防盗保护和超长使用寿命。',
            e600Title: 'E600重型复合材料井盖',
            e600Desc: '专为高速公路和工业应用设计。我们的E600井盖满足最高载荷要求，具有卓越的强度和可靠性。',
            f900Title: 'F900机场复合材料井盖',
            f900Desc: '重型井盖，专为机场、港口和其他关键基础设施设计。最大承载能力，适用于最苛刻的环境。',
            gratingTitle: '复合排水格栅',
            gratingDesc: '适用于城市道路、停车场和工业设施的高效排水解决方案。重量轻但强度高，水流效果出色。',
            clearOpening: '开口尺寸',
            frameSize: '框架尺寸',
            temperatureRange: '温度范围',
            serviceLife: '使用寿命',
            recycledContent: '再生材料含量',
            weight: '重量',
            antiTheftFeature: '防盗设计 - 无回收价值',
            corrosionResistant: '耐腐蚀',
            noiseFree: '静音运行',
            lightweight: '重量轻，安装方便',
            ecoFriendly: '环保材料',
            urbanRoads: '城市道路',
            highways: '高速公路',
            municipalDrainage: '市政排水系统',
            industrialFacilities: '工业设施',
            ports: '港口码头',
            airports: '机场',
            heavyIndustrial: '重型工业区',
            military: '军事设施',
            parking: '停车场'
        },
        about: {
            title: '关于我们',
            subtitle: '三十年复合材料创新',
            companyProfile: '公司简介',
            manufacturing: '制造优势',
            quality: '质量保证',
            globalPresence: '全球布局',
            companyDesc1: '香港欣东实业有限公司成立于1990年，是一家专注于先进酚醛复合材料和可持续基础设施解决方案的技术驱动型制造商。凭借三十多年的材料科学和工程应用经验，公司致力于开发高性能复合材料产品，服务于市政和工业基础设施领域。',
            companyDesc2: '香港欣东实业旗下旗舰品牌ACONCN提供复合材料井盖、排水系统及相关基础设施组件，专为满足现代城市环境的严苛要求而设计。这些产品广泛应用于市政道路网络、公用事业系统、港口、工业设施和交通基础设施等领域。',
            manufacturingDesc1: 'ACONCN复合材料井盖采用玻璃纤维增强酚醛复合材料制造，融入超过80%的回收工业材料。通过精密压缩成型工艺生产，与传统铸铁产品相比，具有卓越的结构性能、耐腐蚀性、防盗性和超长使用寿命。',
            manufacturingDesc2: '公司的生产运营得到深圳和福建漳州国家级经济技术开发区现代化生产设施的支持。这些设施具备大规模生产能力、严格的质量控制和灵活的制造能力，可满足标准和定制项目需求。',
            qualityDesc1: 'ACONCN产品按照EN 124承载分级系统的要求设计，承载等级从A15到F900，适用于人行道、道路、港口和重型基础设施。典型开口尺寸包括600mm、700mm、800mm、900mm和1000mm，可根据需求提供定制规格。',
            qualityDesc2: '质量保证通过深圳计量质量检测研究院等权威机构的严格测试和第三方验证得到保障。产品经过结构载荷测试、耐久性评估和材料性能验证，确保稳定的质量和安全性。',
            globalPresenceDesc: '今天，香港欣东实业有限公司继续通过为欧洲、北美和其他全球市场的合作伙伴提供可靠、环保的基础设施材料来拓展国际业务。通过复合材料技术和可持续制造的持续创新，公司致力于支持更安全、更持久、更可持续的城市基础设施发展。'
        },
        contact: {
            title: '联系我们',
            subtitle: '与我们的团队联系',
            name: '姓名',
            email: '邮箱',
            phone: '电话',
            message: '留言',
            send: '发送消息',
            companyName: '香港欣东实业有限公司',
            companyTagline: 'ACONCN复合材料基础设施解决方案',
            whatsapp: 'WhatsApp',
            linkedin: '领英',
            businessHours: '营业时间',
            businessHoursDesc: '周一至周五: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: '您的姓名',
            emailPlaceholder: 'your@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: '请告诉我们您的项目需求...',
            success: '感谢您的留言！您的邮件客户端将立即打开。我们将在24小时内与您联系。',
            error: '发送失败！请稍后重试。',
            invalidEmail: '请输入有效的邮箱地址。'
        },
        news: {
            pageKicker: '新闻与博客',
            pageTitle: '公司动态与行业洞察',
            pageDesc: '了解复合材料井盖技术的最新发展、公司动态和工厂展示。',
            stats: {
                years: '年行业经验',
                covers: '已安装井盖',
                projects: '基础设施项目',
                quality: '质量合格率'
            },
            latestKicker: '最新动态',
            latestTitle: '近期更新与公告',
            latestDesc: '来自ACONCN的最新发展和里程碑',
            category: {
                company: '公司动态',
                product: '产品更新',
                industry: '行业资讯'
            },
            article1: {
                title: '欣东完成华南重大基础设施项目',
                desc: '我们的复合材料井盖已成功安装在广东省的一个大型城市开发项目中，展示了卓越的性能...'
            },
            article2: {
                title: '新一代F900重型井盖正式发布',
                desc: '推出升级版F900井盖，提升承载能力和耐久性，适用于机场和港口应用...'
            },
            article3: {
                title: '复合材料正在革新城市基础设施',
                desc: '复合材料井盖如何在亚洲现代市政项目中取代传统铸铁方案...'
            },
            readMore: '了解更多',
            factoryKicker: '工厂参观',
            factoryTitle: '走进我们的制造基地',
            factoryDesc: '带您参观我们45,000平方米的现代化生产基地',
            factory: {
                entrance: '现代化工厂大门',
                entranceDesc: '深圳45,000平方米生产基地',
                production: '自动化生产线',
                productionDesc: '先进压缩成型技术',
                quality: '质量检测中心',
                qualityDesc: 'ISO 9001认证检测实验室',
                raw: '原材料仓库',
                rawDesc: '80%回收材料存储',
                finished: '成品区域',
                finishedDesc: '准备全球发货',
                testing: '载荷测试中心',
                testingDesc: 'EN 124标准合规测试',
                workshop: '精密车间',
                workshopDesc: '定制模具制造',
                packaging: '包装生产线',
                packagingDesc: '环保包装解决方案',
                logistics: '物流中心',
                logisticsDesc: '全球运输与配送',
                rd: '研发部门',
                rdDesc: '持续技术创新',
                machinery: '重型机械',
                machineryDesc: '高产能生产设备',
                floor: '生产车间',
                floorDesc: '大规模制造运营'
            },
            blogKicker: '技术博客',
            blogTitle: '技术洞察与知识分享',
            blogDesc: '技术文章与行业知识分享',
            blog1: {
                title: '为什么选择复合材料井盖而非铸铁井盖？',
                p1: '在城市基础设施项目中，复合材料与铸铁井盖的选择日益重要。本文探讨复合材料的核心优势：',
                point1: '<strong>防盗设计：</strong>复合材料井盖无回收价值，对盗贼没有吸引力。铸铁井盖常被偷盗变卖，造成重大安全隐患。',
                point2: '<strong>超长使用寿命：</strong>我们的酚醛复合材料使用寿命超过25年，而铸铁仅10-15年。这意味着更低的维护成本。',
                point3: '<strong>重量更轻：</strong>复合材料井盖比铸铁轻60-70%，安装更安全高效，运输成本也更低。',
                point4: '<strong>环保优势：</strong>我们的复合材料包含高达80%的回收材料，助力可持续基础设施发展。',
                point5: '<strong>静音设计：</strong>与金属井盖不同，复合材料井盖在车辆通过时不会产生响声，减少城市噪音污染。',
                p2: '凭借EN 124、ISO 9001和SGS等认证，复合材料井盖正成为具有远见的市政和基础设施开发商的首选。'
            },
            blog2: {
                title: '解读EN 124井盖标准',
                p1: 'EN 124标准是欧洲金属和复合材料井盖及排水篦子的标准。它定义了载荷等级和测试要求，确保产品满足不同应用的安全和性能标准：',
                p2: '所有ACONCN井盖均通过EN 124标准检测和认证，确保在指定应用中可靠运行。我们的质量控制流程包括经认可机构的第三方检测。'
            },
            blog3: {
                title: '可持续基础设施的未来：复合材料',
                p1: '随着全球城市关注可持续发展目标，对环保基础设施材料的需求持续增长。复合材料井盖是这一转型的关键解决方案：',
                point1: '<strong>回收含量：</strong>我们的复合材料高达80%来自回收工业来源，减少对原始材料的依赖。',
                point2: '<strong>超长使用寿命：</strong>凭借25年以上的耐久性，复合材料井盖需要更少的更换，减少基础设施生命周期内的废物产生。',
                point3: '<strong>耐腐蚀：</strong>与金属井盖不同，复合材料永不腐蚀，无需防护涂层，减少环境影响。',
                point4: '<strong>低碳足迹：</strong>复合材料的制造过程相比铸铁生产产生的排放显著更少。',
                p2: '在ACONCN，我们致力于通过复合材料技术和制造工艺的持续创新，推动可持续基础设施发展。'
            },
            ctaPrefix: '联系我们',
            ctaTitle: '参观工厂或获取报价',
            ctaDesc: '亲身体验我们的制造能力，或为您的下一个项目获取有竞争力的价格。',
            ctaBtn: '立即联系我们'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über Uns',
            products: 'Produkte',
            comparison: 'Vergleich',
            applications: 'Anwendungen',
            caseStudies: 'Fallstudien',
            certifications: 'Zertifizierungen',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Umweltfreundliche Deckel',
            titlePrefix: 'Nachhaltig & Langlebig',
            subtitle: 'Hochfeste Phenolverbunddeckel für städtische Straßen, Häfen und industrielle Anwendungen.',
            viewProducts: 'Produkte ansehen',
            requestQuote: 'Angebot anfordern'
        },
        features: {
            title: 'Warum ACONCN?',
            subtitle: 'Premium-Verbundlösungen mit nachgewiesener Leistung',
            antiTheft: {
                title: 'Diebstahlsicher',
                desc: 'Kein Schrottwert, keine Metallkomponente.'
            },
            highLoad: {
                title: 'Hohe Belastbarkeit',
                desc: 'Bis F900 für Schwerlast-Infrastruktur.'
            },
            longLife: {
                title: 'Lange Lebensdauer',
                desc: 'Über 25 Jahre nachgewiesene Leistung.'
            },
            sustainable: {
                title: 'Nachhaltige Materialien',
                desc: '80% recycelte Materialien.'
            },
            warranty: {
                title: '10-Jahres-Garantie',
                desc: 'Kostenloser Ersatz innerhalb von 10 Jahren.'
            },
            quiet: {
                title: 'Geräuschfreies Design',
                desc: 'Geräuschlose Betriebsweise.'
            },
            intelligent: {
                title: 'Intelligentes & Individualisiertes Design',
                desc: 'Smart und personalisierte Optionen.'
            },
            antiEdge: {
                title: 'Anti-Randbruch',
                desc: 'Verstärkte Ränder verhindern Abplatzungen.'
            }
        },
        products: {
            title: 'Unsere Verbunddeckel-Lösungen',
            subtitle: 'Nach EN 124-Standards entwickelt',
            viewAll: 'Alle Produkte ansehen',
            d400: {
                name: 'D400 Straßendeckel',
                desc: 'Für städtische Straßen und Hochverkehrsgebiete.'
            },
            e600: {
                name: 'E600 Schwerlastdeckel',
                desc: 'Für Autobahnen und industrielle Anwendungen.'
            },
            f900: {
                name: 'F900 Flughafendeckel',
                desc: 'Schwerlastdeckel für Flughäfen und Häfen.'
            },
            grating: {
                name: 'Verbundentwässerungsgitter',
                desc: 'Effiziente Entwässerungslösungen.'
            }
        },
        applications: {
            title: 'Anwendungen',
            subtitle: 'Vielseitige Lösungen für verschiedene Infrastrukturbedürfnisse',
            urban: 'Städtische Straßen',
            ports: 'Häfen',
            airports: 'Flughäfen',
            industrial: 'Industriezonen',
            utility: 'Versorgungsnetze'
        },
        caseStudies: {
            title: 'Erprobte Infrastrukturprojekte',
            subtitle: 'Erfolgsgeschichten aus der Praxis',
            yichang: 'Yichang Kommunalprojekt',
            yichangDesc: 'Über 25.000 Verbunddeckel seit 2001 installiert, Ausfallrate unter 0,05%.',
            unitsInstalled: 'Installierte Einheiten',
            sinceYear: 'Seit',
            failureRate: 'Ausfallrate',
            comparison: 'Verbund vs Gusseisen',
            composite: 'ACONCN Verbund',
            compositeDesc: 'Siedlungsfrei, keine Randbeschädigung, korrosionsbeständig',
            castIron: 'Gusseisen',
            castIronDesc: 'Neigt zum Siedeln, Randbeschädigung, Korrosion'
        },
        certifications: {
            title: 'Qualitätszertifizierungen',
            subtitle: 'Global anerkannte Standards',
            en124: 'EN 124 zertifiziert',
            sgs: 'SGS geprüft',
            iso: 'ISO 9001',
            green: 'Grünes Label'
        },
        comparison: {
            title: 'Verbund vs Gusseisen',
            subtitle: 'Sehen Sie den Unterschied selbst',
            composite: 'ACONCN Verbund',
            compositeDesc: 'Siedlungsfrei, keine Randbeschädigung, korrosionsbeständig',
            castIron: 'Gusseisen',
            castIronDesc: 'Neigt zum Siedeln, Randbeschädigung, Korrosion',
            antiTheft: 'Diebstahlsicher',
            lightweight: 'Leichtgewicht',
            noNoise: 'Geräuschfrei',
            ecoFriendly: 'Umweltfreundlich',
            theftRisk: 'Hohes Diebstahlrisiko',
            heavy: 'Schwer',
            noisy: 'Geräuschbelästigend',
            notEco: 'Nicht umweltfreundlich',
            noise: 'Geräuschvergleich',
            noiseDesc: 'Gusseisendeckel produzieren Geräusche, wenn Fahrzeuge darüber fahren, aufgrund von Siedlung und Vibration.',
            silentDesc: 'ACONCN Verbunddeckel bleiben eben und geräuschfrei und eliminieren Geräuschbelästigung.',
            tableTitle: 'Detaillierter Vergleich'
        },
        testReports: {
            title: 'Prüfberichte',
            subtitle: 'Zertifizierte Qualität und Leistung',
            report40t: '40T Lastprüfbericht',
            report40tDesc: 'D400 Lastklasse Zertifizierungsprüfungsergebnisse',
            report60t: '60T Lastprüfbericht',
            report60tDesc: 'E600 Lastklasse Zertifizierungsprüfungsergebnisse'
        },
        cta: {
            title: 'Starten Sie Ihr Projekt mit ACONCN',
            titlePrefix: 'JETZT STARTEN',
            desc: 'Erhalten Sie Expertenrat und wettbewerbsfähige Preise.'
        },
        common: {
            viewDetails: 'Details ansehen',
            requestQuote: 'Angebot anfordern',
            loadClass: 'Belastungsklasse',
            size: 'Größe',
            material: 'Material',
            features: 'Eigenschaften',
            applications: 'Anwendungen',
            address: 'Adresse',
            businessHours: 'Geschäftszeiten'
        },
        footer: {
            products: 'Produkte',
            services: 'Dienste',
            company: 'Firma',
            contact: 'Kontakt',
            phone: 'Telefon:',
            email: 'E-Mail:',
            address: 'Adresse:',
            manholeCovers: 'Deckel',
            drainageGrates: 'Entwässerungsgitter',
            customSolutions: 'Maßanfertigungen',
            aboutUs: 'Über Uns',
            caseStudies: 'Fallstudien',
            certifications: 'Zertifizierungen',
            companyDesc: 'Hochleistungs-Verbundwerkstoff-Infrastrukturlösungen für globale Märkte.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. Alle Rechte vorbehalten.',
            followUs: 'Folgen Sie uns'
        },
        productDetail: {
            d400Title: 'D400 Verbunddeckel',
            d400Desc: 'Für städtische Straßen und Hochverkehrsgebiete entwickelt. Unsere D400 Verbunddeckel bieten hervorragende Haltbarkeit, Diebstahlsicherheit und lange Lebensdauer.',
            e600Title: 'E600 Schwerlast-Verbunddeckel',
            e600Desc: 'Für Autobahnen und industrielle Anwendungen entwickelt. Unsere E600 Deckel erfüllen die höchsten Belastungsanforderungen mit überlegener Stärke und Zuverlässigkeit.',
            f900Title: 'F900 Flughafen-Verbunddeckel',
            f900Desc: 'Schwerlastdeckel für Flughäfen, Häfen und andere kritische Infrastruktur. Maximale Belastbarkeit für anspruchsvollste Umgebungen.',
            gratingTitle: 'Verbundentwässerungsgitter',
            gratingDesc: 'Effiziente Entwässerungslösungen für städtische Straßen, Parkplätze und Industrieanlagen. Leichtgewichtig aber robust mit excellentem Wasserfluss.',
            clearOpening: 'Freie Öffnung',
            frameSize: 'Rahmengröße',
            temperatureRange: 'Temperaturbereich',
            serviceLife: 'Dienstlebensdauer',
            recycledContent: 'Recyclanteil',
            weight: 'Gewicht',
            antiTheftFeature: 'Diebstahlsicher - Kein Schrottwert',
            corrosionResistant: 'Korrosionsbeständig',
            noiseFree: 'Geräuschloser Betrieb',
            lightweight: 'Leichtgewicht für einfache Installation',
            ecoFriendly: 'Umweltfreundliche Materialien',
            urbanRoads: 'Städtische Straßen',
            highways: 'Autobahnen',
            municipalDrainage: 'Kommunale Entwässerungssysteme',
            industrialFacilities: 'Industrieanlagen',
            ports: 'Häfen',
            airports: 'Flughäfen',
            heavyIndustrial: 'Schwerindustriezonen',
            military: 'Militäranlagen',
            parking: 'Parkplätze'
        },
        about: {
            title: 'Über Uns',
            subtitle: 'Drei Jahrzehnte Innovation in Verbundwerkstoffen',
            companyProfile: 'Firmenprofil',
            manufacturing: 'Herstellungsexzellenz',
            quality: 'Qualitätssicherung',
            globalPresence: 'Globale Präsenz',
            companyDesc1: 'Hong Kong Xindong Industrial Co., Ltd., gegründet 1990, ist ein technologiegetriebener Hersteller, der sich auf fortschrittliche Phenolverbundwerkstoffe und nachhaltige Infrastrukturlösungen spezialisiert hat. Mit über drei Jahrzehnten Erfahrung in Materialwissenschaft und Ingenieuranwendungen konzentriert sich das Unternehmen auf die Entwicklung von Hochleistungs-Verbundprodukten für kommunale und industrielle Infrastruktur.',
            companyDesc2: 'Unter seiner Marke ACONCN bietet Hong Kong Xindong Industrial Verbunddeckel, Entwässerungssysteme und verwandte Infrastrukturkomponenten, die für die anspruchsvollen Anforderungen moderner städtischer Umgebungen entwickelt wurden. Diese Produkte dienen einer Vielzahl von Anwendungen, einschließlich kommunaler Straßennetze, Versorgungsnetze, Häfen, Industrieanlagen und Verkehrsinfrastruktur.',
            manufacturingDesc1: 'ACONCN-Verbunddeckel werden aus glasfaserverstärkten Phenolverbundwerkstoffen hergestellt, die mehr als 80% recycelte Industriematerialien enthalten. Durch einen präzisen Pressformprozess hergestellt, bieten die Produkte im Vergleich zu traditionellem Gusseisen eine starke Strukturleistung, Korrosionsbeständigkeit, Diebstahlsicherheit und eine lange Lebensdauer.',
            manufacturingDesc2: 'Die Produktionsbetriebe des Unternehmens werden durch moderne Produktionsanlagen in Shenzhen und in der Nationalen Wirtschafts- und Technologischen Entwicklungszone von Zhangzhou, Fujian-Provinz, unterstützt. Diese Einrichtungen bieten eine großangelegte Produktionskapazität, strenge Qualitätskontrolle und flexible Fertigung, um sowohl Standard- als auch kundenspezifische Projektanforderungen zu erfüllen.',
            qualityDesc1: 'ACONCN-Produkte werden entsprechend den Anforderungen des EN 124-Belastungsklassifikationssystems entwickelt, mit verfügbaren Belastungsklassen von A15 bis F900 für Fußwege, Straßen, Häfen und Schwerlast-Infrastruktur. Typische Öffnungsgrößen umfassen 600 mm, 700 mm, 800 mm, 900 mm und 1000 mm, mit zusätzlichen kundenspezifischen Spezifikationen auf Anfrage.',
            qualityDesc2: 'Die Qualitätssicherung wird durch strenge Tests und Drittverifizierung durch akkreditierte Institutionen wie die Shenzhen Academy of Metrology & Quality Inspection unterstützt. Produkte unterziehen sich strukturellen Belastungstests, Haltbarkeitsbewertungen und Materialleistungsverifizierungen, um konsistente Qualität und Sicherheit zu gewährleisten.',
            globalPresenceDesc: 'Heute erweitert Hong Kong Xindong Industrial Co., Ltd. seine internationale Präsenz, indem es verlässliche, umweltverantwortliche Infrastrukturmaterialien für Partner in Europa, Nordamerika und anderen globalen Märkten bereitstellt. Durch kontinuierliche Innovation in Verbundwerkstofftechnologie und nachhaltiger Herstellung verpflichtet sich das Unternehmen, die Entwicklung von sichereren, langlebigeren und nachhaltigeren städtischen Infrastrukturen zu unterstützen.'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Kontaktieren Sie unser Team',
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon',
            message: 'Nachricht',
            send: 'Nachricht senden',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Verbundwerkstoff-Infrastrukturlösungen',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Geschäftszeiten',
            businessHoursDesc: 'Montag - Freitag: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Ihr Name',
            emailPlaceholder: 'Ihre E-Mail',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Beschreiben Sie Ihre Projektanforderungen...',
            success: 'Vielen Dank! Ihr E-Mail-Client wird bald geöffnet. Wir kontaktieren Sie innerhalb von 24 Stunden.',
            error: 'Oops! Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.',
            invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À Propos',
            products: 'Produits',
            comparison: 'Comparaison',
            applications: 'Applications',
            caseStudies: 'Études de Cas',
            certifications: 'Certifications',
            contact: 'Contact'
        },
        hero: {
            title: 'Couvercles écologiques',
            titlePrefix: 'Durable & Fiable',
            subtitle: 'Couvercles composites phénoliques haute résistance conçus pour les routes municipales, ports et applications industrielles.',
            viewProducts: 'Voir les produits',
            requestQuote: 'Demander un devis'
        },
        features: {
            title: 'Pourquoi choisir ACONCN ?',
            subtitle: 'Solutions composites premium avec performance éprouvée',
            antiTheft: {
                title: 'Antivol',
                desc: 'Aucune valeur de rebut, pas de contenu métallique.'
            },
            highLoad: {
                title: 'Capacité de charge élevée',
                desc: 'Jusqu\'à F900 pour les infrastructures lourdes.'
            },
            longLife: {
                title: 'Longue durée de vie',
                desc: 'Plus de 25 ans de performance éprouvée.'
            },
            sustainable: {
                title: 'Matériaux durables',
                desc: '80% de matériaux recyclés.'
            },
            warranty: {
                title: 'Garantie de 10 ans',
                desc: 'Remplacement gratuit dans les 10 ans.'
            },
            quiet: {
                title: 'Design silencieux',
                desc: 'Fonctionnement silencieux, pas de bruit.'
            },
            intelligent: {
                title: 'Design intelligent & personnalisé',
                desc: 'Options intelligentes et personnalisables.'
            },
            antiEdge: {
                title: 'Anti-endommagement des bords',
                desc: 'Bords renforcés pour prévenir les éclats.'
            }
        },
        products: {
            title: 'Nos solutions de couvercles composites',
            subtitle: 'Conçus selon les normes EN 124',
            viewAll: 'Voir tous les produits',
            d400: {
                name: 'Couvercle routier D400',
                desc: 'Conçu pour les routes urbaines et les zones à fort trafic.'
            },
            e600: {
                name: 'Couvercle lourd E600',
                desc: 'Pour les autoroutes et applications industrielles.'
            },
            f900: {
                name: 'Couvercle aéroportuaire F900',
                desc: 'Couvercles lourds pour les aéroports et ports.'
            },
            grating: {
                name: 'Grille de drainage composite',
                desc: 'Solutions de drainage efficaces.'
            }
        },
        applications: {
            title: 'Applications',
            subtitle: 'Solutions polyvalentes pour divers besoins en infrastructure',
            urban: 'Routes urbaines',
            ports: 'Ports et abris',
            airports: 'Aéroports',
            industrial: 'Zones industrielles',
            utility: 'Réseaux de services'
        },
        caseStudies: {
            title: 'Projets d\'infrastructure éprouvés',
            subtitle: 'Histoires de réussite réelles',
            yichang: 'Projet municipal de Yichang',
            yichangDesc: 'Plus de 25 000 couvercles composites installés depuis 2001, taux de panne inférieur à 0,05%.',
            unitsInstalled: 'Unités installées',
            sinceYear: 'Depuis',
            failureRate: 'Taux de panne',
            comparison: 'Composite vs Fonte',
            composite: 'ACONCN Composite',
            compositeDesc: 'Anti-affaissement, sans dommage de bordure, résistant à la corrosion',
            castIron: 'Fonte',
            castIronDesc: 'Sensible à l\'affaissement, dommage de bordure, corrosion'
        },
        certifications: {
            title: 'Certifications de qualité',
            subtitle: 'Normes reconnues mondialement',
            en124: 'Certifié EN 124',
            sgs: 'Vérifié SGS',
            iso: 'ISO 9001',
            green: 'Label Vert'
        },
        comparison: {
            title: 'Composite vs Fonte',
            subtitle: 'Voir la différence par vous-même',
            composite: 'ACONCN Composite',
            compositeDesc: 'Anti-affaissement, sans dommage de bordure, résistant à la corrosion',
            castIron: 'Fonte',
            castIronDesc: 'Sensible à l\'affaissement, dommage de bordure, corrosion',
            antiTheft: 'Anti-vol',
            lightweight: 'Léger',
            noNoise: 'Silencieux',
            ecoFriendly: 'Écologique',
            theftRisk: 'Risque de vol élevé',
            heavy: 'Lourd',
            noisy: 'Bruyant',
            notEco: 'Non écologique',
            noise: 'Comparaison de bruit',
            noiseDesc: 'Les couvercles en fonte produisent du bruit lorsque les véhicules passent, en raison de l\'affaissement et de la vibration.',
            silentDesc: 'Les couvercles composites ACONCN restent plats et silencieux, éliminant la pollution sonore.',
            tableTitle: 'Tableau de comparaison détaillé'
        },
        testReports: {
            title: 'Rapports d\'essai',
            subtitle: 'Qualité et performance certifiées',
            report40t: 'Rapport d\'essai de charge 40T',
            report40tDesc: 'Résultats de certification de classe de charge D400',
            report60t: 'Rapport d\'essai de charge 60T',
            report60tDesc: 'Résultats de certification de classe de charge E600'
        },
        cta: {
            title: 'Lancez votre projet avec ACONCN',
            titlePrefix: 'COMMENCEZ',
            desc: 'Obtenez des conseils d\'experts et des prix compétitifs.'
        },
        common: {
            viewDetails: 'Voir les détails',
            requestQuote: 'Demander un devis',
            loadClass: 'Classe de charge',
            size: 'Taille',
            material: 'Matériau',
            features: 'Caractéristiques',
            applications: 'Applications',
            address: 'Adresse',
            businessHours: 'Heures d\'ouverture'
        },
        footer: {
            products: 'Produits',
            services: 'Services',
            company: 'Entreprise',
            contact: 'Contact',
            phone: 'Téléphone:',
            email: 'Email:',
            address: 'Adresse:',
            manholeCovers: 'Couvercles',
            drainageGrates: 'Grilles de drainage',
            customSolutions: 'Solutions sur mesure',
            aboutUs: 'À Propos',
            caseStudies: 'Études de Cas',
            certifications: 'Certifications',
            companyDesc: 'Solutions d\'infrastructure en matériaux composites de haute performance pour les marchés mondiaux.',
            copyright: '&copy; 2024 Hong Kong Xindong Industrial Co., Ltd. Tous droits réservés.',
            followUs: 'Suivez-nous'
        },
        productDetail: {
            d400Title: 'Couvercle composite D400',
            d400Desc: 'Conçu pour les routes urbaines et les zones à fort trafic. Nos couvercles composites D400 offrent une durabilité exceptionnelle, une protection antivol et une longue durée de vie.',
            e600Title: 'Couvercle composite lourd E600',
            e600Desc: 'Conçu pour les autoroutes et applications industrielles. Nos couvercles E600 répondent aux exigences de charge les plus élevées avec une résistance et une fiabilité supérieures.',
            f900Title: 'Couvercle composite aéroportuaire F900',
            f900Desc: 'Couvercles lourds conçus pour les aéroports, ports et autres infrastructures critiques. Capacité de charge maximale pour les environnements les plus exigeants.',
            gratingTitle: 'Grille de drainage composite',
            gratingDesc: 'Solutions de drainage efficaces pour routes urbaines, parkings et installations industrielles. Léger mais résistant avec excellent débit d\'eau.',
            clearOpening: 'Ouverture libre',
            frameSize: 'Taille du cadre',
            temperatureRange: 'Plage de température',
            serviceLife: 'Durée de vie',
            recycledContent: 'Contenu recyclé',
            weight: 'Poids',
            antiTheftFeature: 'Design antivol - Aucune valeur de rebut',
            corrosionResistant: 'Résistant à la corrosion',
            noiseFree: 'Fonctionnement silencieux',
            lightweight: 'Léger pour une installation facile',
            ecoFriendly: 'Matériaux écologiques',
            urbanRoads: 'Routes urbaines',
            highways: 'Autoroutes',
            municipalDrainage: 'Systèmes de drainage municipal',
            industrialFacilities: 'Installations industrielles',
            ports: 'Ports',
            airports: 'Aéroports',
            heavyIndustrial: 'Zones industrielles lourdes',
            military: 'Installations militaires',
            parking: 'Parkings'
        },
        about: {
            title: 'À Propos',
            subtitle: 'Trois décennies d\'innovation dans les matériaux composites',
            companyProfile: 'Profil de l\'entreprise',
            manufacturing: 'Excellence de fabrication',
            quality: 'Assurance qualité',
            globalPresence: 'Présence mondiale',
            companyDesc1: 'Hong Kong Xindong Industrial Co., Ltd., fondée en 1990, est un fabricant axé sur la technologie spécialisé dans les matériaux composites phénoliques avancés et les solutions d\'infrastructure durables. Avec plus de trois décennies d\'expérience en science des matériaux et applications techniques, l\'entreprise se concentre sur le développement de produits composites de haute performance pour l\'infrastructure municipale et industrielle.',
            companyDesc2: 'Sous sa marque phare ACONCN, Hong Kong Xindong Industrial fournit des couvercles composites, des systèmes de drainage et des composants d\'infrastructure connexes conçus pour répondre aux exigences exigeantes des environnements urbains modernes. Ces produits servent une large gamme d\'applications, notamment les réseaux routiers municipaux, les réseaux de services publics, les ports, les installations industrielles et l\'infrastructure de transport.',
            manufacturingDesc1: 'Les couvercles composites ACONCN sont fabriqués à partir de matériaux composites phénoliques renforcés de fibres de verre, incorporant plus de 80% de matériaux industriels recyclés. Produits par moulage par compression de précision, les produits offrent une performance structurelle solide, une résistance à la corrosion, une protection antivol et une longue durée de vie par rapport aux alternatives en fonte traditionnelles.',
            manufacturingDesc2: 'Les opérations de fabrication de l\'entreprise sont soutenues par des installations de production modernes situées à Shenzhen et dans la zone de développement économique et technologique nationale de Zhangzhou, province de Fujian. Ces installations offrent une capacité de production à grande échelle, un contrôle de qualité strict et une fabrication flexible pour répondre aux exigences des projets standards et personnalisés.',
            qualityDesc1: 'Les produits ACONCN sont conçus selon les exigences du système de classification de charge EN 124, avec des classes de charge allant de A15 à F900 pour les zones piétonnes, les routes, les ports et l\'infrastructure lourde. Les tailles d\'ouverture typiques comprennent 600 mm, 700 mm, 800 mm, 900 mm et 1000 mm, avec des spécifications personnalisées supplémentaires disponibles sur demande.',
            qualityDesc2: 'L\'assurance qualité est soutenue par des tests rigoureux et une vérification par des tiers effectuée par des institutions accréditées telles que l\'Académie de métrologie et d\'inspection de qualité de Shenzhen. Les produits subissent des tests de charge structurelle, une évaluation de durabilité et une vérification de performance matérielle pour garantir une qualité et une sécurité constantes.',
            globalPresenceDesc: "Aujourd'hui, Hong Kong Xindong Industrial Co., Ltd. continue d'étendre sa présence internationale en fournissant des matériaux d'infrastructure fiables et écologiquement responsables aux partenaires en Europe, en Amérique du Nord et sur d'autres marchés mondiaux. Grâce à une innovation continue dans la technologie des composites et une fabrication durable, l'entreprise s'engage à soutenir le développement d'une infrastructure urbaine plus sûre, plus durable et plus durable."
        },
        contact: {
            title: 'Contact',
            subtitle: 'Contactez notre équipe',
            name: 'Nom',
            email: 'Email',
            phone: 'Téléphone',
            message: 'Message',
            send: 'Envoyer le message',
            companyName: 'Hong Kong Xindong Industrial Co., Ltd.',
            companyTagline: 'ACONCN Solutions d\'infrastructure en composites',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            businessHours: 'Heures d\'ouverture',
            businessHoursDesc: 'Lundi - Vendredi: 9:00 - 18:00 (UTC+8)',
            yourNamePlaceholder: 'Votre nom',
            emailPlaceholder: 'votre@email.com',
            phonePlaceholder: '+86 xxx xxxx xxxx',
            messagePlaceholder: 'Décrivez vos exigences de projet...',
            success: 'Merci ! Votre client de messagerie va s\'ouvrir bientôt. Nous vous contacterons dans les 24 heures.',
            error: 'Oups ! Quelque chose a mal fonctionné. Veuillez réessayer plus tard.',
            invalidEmail: 'Veuillez entrer une adresse e-mail valide.'
        }
    }
};

let currentLang = 'en';

function initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'en';
    currentLang = savedLang;
    updateLanguage();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLanguage();
}

function updateLanguage() {
    const langData = translations[currentLang];
    
    // Update navigation
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        const value = getNestedValue(langData, key);
        if (value !== null && value !== undefined) {
            el.textContent = value;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder');
        const value = getNestedValue(langData, key);
        if (value) {
            el.setAttribute('placeholder', value);
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k]) ? o[k] : null, obj);
}

function getTrans(key) {
    return getNestedValue(translations[currentLang], key);
}

// Mobile menu toggle
function toggleMobileMenu() {
    try {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    } catch (e) {
        console.error('Mobile menu toggle error:', e);
    }
}

// Scroll effects
function handleScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    document.querySelector('.nav-links').classList.remove('active');
}

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#DCFCE7';
        messageDiv.style.color = '#16A34A';
        messageDiv.style.border = '1px solid #BBF7D0';
    } else {
        messageDiv.style.backgroundColor = '#FEE2E2';
        messageDiv.style.color = '#DC2626';
        messageDiv.style.border = '1px solid #FECACA';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    try {
        initLanguage();
    } catch (e) {
        console.error('Language init error:', e);
    }
    
    try {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    } catch (e) {
        console.error('Scroll listener error:', e);
    }
    
    try {
        // Add click listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                setLanguage(btn.dataset.lang);
            });
        });
    } catch (e) {
        console.error('Language buttons error:', e);
    }
    
    try {
        // Add click listener to hamburger menu using ID selector
        const hamburgerBtn = document.getElementById('mobile-menu-btn');
        if (hamburgerBtn) {
            hamburgerBtn.addEventListener('click', toggleMobileMenu);
        }
    } catch (e) {
        console.error('Hamburger menu error:', e);
    }
    
    try {
        // Add smooth scroll to navigation links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(href.substring(1));
                }
                // Close mobile menu after clicking a link
                try {
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks) {
                        navLinks.classList.remove('active');
                    }
                } catch (e) {
                    console.error('Close menu error:', e);
                }
            });
        });
    } catch (e) {
        console.error('Nav links error:', e);
    }
    
    // Form submission handler
    try {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formMessage = document.getElementById('form-message');
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Simple email validation
                const emailInput = contactForm.querySelector('input[name="email"]');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailInput && !emailRegex.test(emailInput.value)) {
                    showFormMessage(getTrans('contact.invalidEmail') || 'Please enter a valid email address.', 'error');
                    return;
                }
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                try {
                    const formData = new FormData(contactForm);
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok && result.success) {
                        showFormMessage(getTrans('contact.success') || 'Thank you! Your message has been sent.', 'success');
                        contactForm.reset();
                    } else {
                        showFormMessage(getTrans('contact.error') || 'Failed to send message. Please try again.', 'error');
                    }
                } catch (error) {
                    showFormMessage(getTrans('contact.error') || 'Failed to send message. Please try again.', 'error');
                }
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        }
    } catch (e) {
        console.error('Form handler error:', e);
    }
});