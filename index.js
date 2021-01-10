var app = document.getElementsByClassName('terminal_body');

var typewriter = new Typewriter(app[0], {
    loop: false,
    delay: 0,
    cursor: false
});

document.getElementsByClassName('stop-effect')[0].addEventListener('click', function () {
    typewriter.stop();

    document.querySelector('.terminal_body_hidden').style.display = 'block';

    var body = document.querySelectorAll('.terminal_text');
    var prompt = document.querySelectorAll('.terminal_prompt')

    var index = 0, length = body.length;
    for ( ; index < length; index++) {
        body[index].style.display = 'block';
    }

    var index = 0, length = prompt.length;
    for ( ; index < length; index++) {
        prompt[index].style.display = 'block';
    }

    document.querySelector('.terminal_body').style.display = 'none';
})

typewriter.typeString('<div class="terminal_text">Raul Alvarez Roncel</div>')
    .typeString('<div class="terminal_text"><strong>Currently:</strong> Wellness TechGroup | Front-End Developer | Seville</div>')
    .typeString('<div class="terminal_text"><strong>Contact:</strong> +34.649.34.40.46 | raulalvarez15@hotmail.com</div>')
    .typeString('<div class="terminal_text"><strong>Websites:</strong> raualvron.github.io | linkedin.com/in/raulalvarezroncel</div>')
    .typeString('<div class="terminal_text"><strong>Skills:</strong> HTML, CSS, SASS, Bootstrap, JQuery, Underscore.js, Moment.js, Vanilla JS, Ember.js, Node.js, React, Polymer.js, AngularJS, Ionic, Apache Cordova, Android, Symfony, Laravel, NPM, Bower, </div>')
    .typeString('<div class="terminal_text"><strong>Languages:</strong> English and Spanish</div>')
    .typeString('<br/>')
    .typeString('<div class="terminal_text"><strong>-----  Education -----</strong></div>')
    .typeString('<div class="terminal_text"><strong>Universidad Pablo de Olavide</strong> | Computer Science Master Degree | 2019 - 2021</div>')
    .typeString('<div class="terminal_text"><i>The Computing Technologies module deals with Cloud Computing (OpenStack, Docker, Google Cloud and Azure), Big Data (HBase, Spark, R), the development of mobile apps (Android) and high-performance computing, and trains in current technologies demanded by the industry. Collaboration of IBM, which will deal with practical teaching in real environments. Moreover, this Masters Degree puts at the technological forefront of cyber-physical systems embedded in our environment, including the Internet of Things or Smart Cities and incorporating renowned companies in the sector, such as Wellness Smart Cities. Specialisation, with the collaboration of professionals working at AIRBUS, in Aeronautical Computer Systems, which falls into line with the surrounding industrial fabric. Also, this Masters Degree trains in managerial abilities in order to work as a CTO and lead an IT department in any organisation or company.</i></div>')
    .typeString('<br/>')
    .typeString('<div class="terminal_text"><strong>Dundee and Angus College</strong> | ESOL - English for Speakers of Other Languages | 2016 - 2017</div>')
    .typeString('<div class="terminal_text"><i>Dundee and Angus College is a large college spread across three campuses in the east of Scotland. Part-time General English courses. Strong focus on interactive communication and practise grammar, vocabulary and all four skills in interesting and varied lessons. Encouraged to take an active role in the learning process both inside and outside the classroom through project work which enables students to develop study, research and presentation skills.</i></div>')
    .typeString('<br/>')
    .typeString('<div class="terminal_text"><strong>Universidad de Sevilla</strong> | Bachelor of Science Degree - Software Engineering | 2008 - 2013</div>')
    .typeString('<br/>')
    .typeString('<div class="terminal_text"><strong>----- Experiences -----</strong></div>')
    .typeString('<div class="terminal_text"><strong>Wellness TechGroup</strong> | Front-End | Jul 2020 - Currently | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Research and innovate in new technologies.</div>')
    .typeString('<div class="terminal_text">Design and develop software on the front side.</div>')
    .typeString('<div class="terminal_text">Define and evaluate functional requirements.</div>')
    .typeString('<div class="terminal_text">Define and implement development tests on the software.</div>')
    .typeString('<div class="terminal_text">Document projects developed.</div>')
    .typeString('<div class="terminal_text">Develop JavaScript apps using React framework.</div>')
    .typeString('<div class="terminal_text">Use GIT as version control system.</div>')
    .typeString('<div class="terminal_text"><br></div>')
    .typeString('<div class="terminal_text"><strong>GlampingHub</strong> | Front-End | Nov 2018 - Jul 2020 | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Designing and developing an internal app with EmberJS web framework</div>')
    .typeString('<div class="terminal_text">Using GIT as version control system</div>')
    .typeString('<div class="terminal_text">Working with a Django REST API</div>')
    .typeString('<div class="terminal_text">Using Javascript libraries like Underscore.js, Moment.js.</div>')
    .typeString('<div class="terminal_text">Bootstrap 4 (HTML, CSS, JavaScript) for developing responsive and mobile-first apps</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Waracle</strong> | Front-End | Jan 2016 - Nov 2018 | Dundee, Scotland</div>')
    .typeString('<div class="terminal_text">Design and implement new features and functionality</div>')
    .typeString('<div class="terminal_text">Test and improve on the user experience in platforms.</div>')
    .typeString('<div class="terminal_text">Build features using HTML, CSS, PHP (Laravel and Symfony frameworks), Javascript, JQuery.</div>')
    .typeString('<div class="terminal_text">Fully maintain and bug fix any issues that arise on the front end or back end code.</div>')
    .typeString('<div class="terminal_text">Work with the Project Manager and Digital Project Manager in the projects.</div>')
    .typeString('<div class="terminal_text">Experience with: modern MV* Frameworks (Angular, TypeScript), modern Front End Dev Ops (NPM, Bower, Grunt..)</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Global Voices LTD</strong> | Software Developer | Aug 2015 - Dec 2015 | Stirling, Scotland</div>')
    .typeString('<div class="terminal_text">Database programming and management: MySQL</div>')
    .typeString('<div class="terminal_text">Networking and server maintenance: cPanel & WHMCS</div>')
    .typeString('<div class="terminal_text">Google Analytics/established tracking systems</div>')
    .typeString('<div class="terminal_text">Continuous analysis and development of existing linguist and customer portals: PHP, HTML, CSS, JavaScript, JQuery, AJAX, Bootstrap.</div>')
    .typeString('<div class="terminal_text">Maintain and develop the website and manage content: Wordpress</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Universidad de Sevilla</strong> | Developer | Jul 2014 - Aug 2015 | Seville, Spain</div>')
    .typeString('<div class="terminal_text"><i>IDINFOR Team (Computer Investigation, Development and Innovation) Departament of Languages and Computer Systems. Software Engineering, University of Seville, Spain.</i></div>')
    .typeString('<div class="terminal_text">Programming languages: PHP,HTML,CSS Javascript, JQuery.</div>')
    .typeString('<div class="terminal_text">Git: Control version system.</div>')
    .typeString('<div class="terminal_text">Content Management system (CMS): Joomla, WordPress, Drupal.</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Oklan</strong> | Developer | Nov 2013 - Apr 2014 | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Management, administration y programming of CMS: Wordpress, Joomla, Prestashop.</div>')
    .typeString('<div class="terminal_text">Programming languages PHP, CSS3, HTML5, JavaScript.</div>')
    .typeString('<div class="terminal_text">Project development, open source, personal blog, social network.</div>')
    .typeString('<div class="terminal_text">Management, support and maintenance of the web servers with web hosting.</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Lienzo de los Gazules</strong> | Developer | Nov 2009 - Mar 2014 | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Web programming. Customer administration CRM. Server Administration Panel. Graphic design</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Factoria3w</strong> | Developer | Mar 2013 - May 2013 | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Touch-sensitive screens in trading and businesses. Project: “Heineken” (HTML5, CSS3, and Javascript). JavaScript frameworks: KineticJS, Pxloader, Jquery and JSON.</div>')
    .typeString('<div class="terminal_text"><br/></div>')
    .typeString('<div class="terminal_text"><strong>Grupo Coynet</strong> | Developer | Oct 2012 - Apr 2013 | Seville, Spain</div>')
    .typeString('<div class="terminal_text">Development, maintenance and support of e-commerce software applications in social network, administration of CRMs, BDs and computer network.</div>')
    .typeString('<div class="terminal_text">Customer support. Facebook Developers.</div>')
    .typeString('<div class="terminal_prompt"><span class="prompt_user">raualvron@github.com:</span><span class="prompt_location">~</span><span class="prompt_dollar">$</span><span class="prompt_cursor"></span></div>')
    .start();
