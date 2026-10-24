import { getAllReleases, getScreenshots, getLatestApkUrl, getLatestRelease } from "../lib/github";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ReleaseList } from "../components/ReleaseList";
import { Projects } from "../components/Projects";
import styles from "./page.module.css";

export default async function Home() {
  const [releases, screenshots, apkUrl, latestRelease] = await Promise.all([
    getAllReleases(),
    getScreenshots(),
    getLatestApkUrl(),
    getLatestRelease()
  ]);

  const latestVersion = latestRelease?.tag_name || "";

  return (
    <div className="page-transition">
      <main className={styles.main}>
        <Navbar apkUrl={apkUrl} />

        <div className="m3-container">
          <Hero screenshots={screenshots} apkUrl={apkUrl} version={latestVersion} />

          <section id="releases" className={styles.section}>
            <ReleaseList releases={releases} />
          </section>

          <Projects />
        </div>

        <footer className={styles.footer}>
          <div className={`m3-container ${styles.footerContent}`}>
            <div className={styles.socials}>
              <a href="https://github.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
             
              <a href="https://instagram.com/mwaririclinton" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            </div>
            <p>© 2026 PocketScore Project by <a href="https://github.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.brandLink}>Mwariri Clinton</a>. Built with Material 3 Expressive.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
