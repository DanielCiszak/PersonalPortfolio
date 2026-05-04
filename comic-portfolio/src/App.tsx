import './App.css'
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'

const comicPages = [
  { path: '/', label: 'Cover' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const currentPageIndex = comicPages.findIndex(
    (page) => page.path === location.pathname
  )

  const safePageIndex = currentPageIndex === -1 ? 0 : currentPageIndex

  const previousPage = comicPages[safePageIndex - 1]
  const nextPage = comicPages[safePageIndex + 1]

  function goToPreviousPage() {
    if (previousPage) {
      navigate(previousPage.path)
    }
  }

  function goToNextPage() {
    if (nextPage) {
      navigate(nextPage.path)
    }
  }

  return (
    <main className="page">
      <header className="topBar">
        <Link to="/" className="logoBox" aria-label="Go to cover page">
          <span>Portfolio No.</span>
          <strong>01</strong>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {comicPages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={
                location.pathname === page.path
                  ? 'navButton active'
                  : 'navButton'
              }
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="bookShell">
        <button
          className="pageArrow pageArrowLeft"
          onClick={goToPreviousPage}
          disabled={!previousPage}
          aria-label="Previous comic page"
        >
          ←
        </button>

        <section className="comicBookFrame">
          <div className="issueBadge">
            {safePageIndex === 0
              ? 'Issue #001'
              : safePageIndex === comicPages.length - 1
                ? 'Final Page'
                : `Chapter #00${safePageIndex + 1}`}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              className="comicPageContent"
              initial={{ opacity: 0, x: 80, rotateY: -8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -80, rotateY: 8 }}
              transition={{
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Routes location={location}>
                <Route path="/" element={<Hero />} />

                <Route path="/about" element={<About />} />

                <Route
                  path="/projects"
                  element={
                    <section className="placeholderPage">
                      <span className="placeholderIssue">Chapter #003</span>
                      <h1>Projects</h1>
                      <p>
                        Current builds and projects will live here. This section
                        will show what I am building, what technologies I used,
                        and links to GitHub or live demos.
                      </p>
                    </section>
                  }
                />

                <Route
                  path="/contact"
                  element={
                    <section className="placeholderPage">
                      <span className="placeholderIssue">Final Page</span>
                      <h1>Contact</h1>
                      <p>
                        Links, email, GitHub, and LinkedIn will go here.
                      </p>
                    </section>
                  }
                />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </section>

        <button
          className="pageArrow pageArrowRight"
          onClick={goToNextPage}
          disabled={!nextPage}
          aria-label="Next comic page"
        >
          →
        </button>
      </div>

      <div className="pageCounter">
        Page {safePageIndex + 1} / {comicPages.length}
      </div>
    </main>
  )
}

export default App