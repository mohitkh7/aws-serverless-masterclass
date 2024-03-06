import './App.css';
import Skills from './Skills';

function App() {
  return (
    <div class="container">
        <div class="card profile mt-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-2 col-md-3 text-center">
                        <img class="img img-fluid profile__img" src="./mohit_profile_image.jpg" alt="Mohit Khandelwal profile" />
                    </div>
                    <div class="col-lg-10 col-md-9">
                        <div class="profile__head">
                            <header class="profile__info mt-3 mt-md-0">
                                <h3 class="profile__name">Mohit Khandelwal</h3>
                                <div class="profile__title">Full-Stack Developer</div>
                            </header>
                            <address class="profile__contact mt-3 mt-md-0">
                                <div class="profile__email"><i class="fa fa-envelope" aria-hidden="true"></i> <a
                                        class="no-anchor-style" href="mailto: mohitkh7@gmail.com">mohitkh7@gmail.com</a>
                                </div>
                                <div class="profile__phone"><i class="fa fa-phone" aria-hidden="true"></i> <a
                                        class="no-anchor-style" href="tel:+919407221181">(+91) 9407 2211 81</a></div>
                            </address>
                        </div>
                        <main class="profile__description">
                            Mohit is a self learned full stack developer. He specializes in Python and Javascript and
                            thrives to make websites that users love. He is always eager to learn, share and expand
                            knowledge.
                        </main>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <aside class="col-md-4">
                <Skills />
                <section class="card experience" data-ng-controller="experienceCtrl">
                    <div class="card-body">
                        <h3 class="card-title experience__title">Experiences</h3>
                        <div class="d-grid gap-5">
                            <article class="job" data-ng-repeat="job in jobs">
                                <div class="job__left-section">
                                    <img class="img-fluid img--flat job__logo" data-ng-src="{{ job.imgUrl }}"
                                        alt="logo of {{ job.company }}" title="{{ job.company }}" />
                                </div>
                                <div class="job__right-section">
                                    <div class="job__period" data-ng-bind="job.period"></div>
                                    <div class="job__title" data-ng-bind="job.position"></div>
                                    <div class="job__description" data-ng-bind="job.description"></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </aside>

            <div class="col-md-8">
                <section class="project-container" data-ng-controller="projectsCtrl">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Projects</h3>
                            <div class="tags-container d-flex flex-wrap gap-2">
                                <button class="btn btn-sm m-1"
                                    ng-class="tag == projectFilterTag ? 'btn--fill' : 'btn--border'"
                                    data-ng-repeat="tag in projectFilterTagList"
                                    data-ng-click="changeProjectFilterTag(tag)">tag</button>
                            </div>
                        </div>
                    </div>
                    <div class="project-list">
                        <div class="row">
                            <div class="col-md-6 mb-4"
                                data-ng-repeat="project in pagedFilteredProjects | orderBy: '!difficulty' ">
                                <article class="card project">
                                    <div class="card-body">
                                        <img class="project__img" data-ng-src="{{ project.imageUrl }}"
                                            alt="screenshot of {{ project.title }} project" />
                                        <div class="project__tags" data-ng-bind="project.tags | tagsList">#HTML, #CSS,
                                            #responsive</div>
                                        <header class="project__title" data-ng-bind="project.title"></header>
                                        <div class="project__description" data-ng-bind="project.description"></div>
                                        <div class="project__action-container">
                                            <a href="{{ project.demoUrl }}" target="_blank" rel="noopener"
                                                class="btn btn--fill me-2" role="button">Demo</a>
                                            <a href="{{ project.codeUrl }}" target="_blank" rel="noopener"
                                                class="btn btn--border" role="button">Code</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="project-pagination">
                        <div class="text-end">
                            <button class="btn btn--flat ms-3"
                                data-ng-class="$index + 1 == currentPage ? 'btn--fill': 'btn--default'"
                                data-ng-click="changePage($index + 1)"
                                data-ng-repeat="i in [].constructor(totalPages) track by $index">
                                1
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <footer class="mt-4">
            <p>Developed by <b>mohitkh7</b></p>
        </footer>
    </div>
  );
}

export default App;
