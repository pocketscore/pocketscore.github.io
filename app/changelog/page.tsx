import { getChangelog, getLatestApkUrl } from "../../lib/github";
import { Navbar } from "../../components/Navbar";
import { pageMetadata } from "../../lib/seo";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from "./changelog.module.css";

export const metadata = pageMetadata({
  title: "Changelog | PocketScore",
  description:
    "Read the PocketScore Android changelog. See every new feature, improvement, and bug fix in each release.",
  path: "/changelog",
});

export default async function ChangelogPage() {
    const changelog = await getChangelog();
    const apkUrl = await getLatestApkUrl();

    return (
        <div className="page-transition">
            <main>
                <Navbar apkUrl={apkUrl} />
                <div className="m3-container">
                    <header className={styles.header}>
                        <h1 className="m3-display-large">Changelog</h1>
                        <p className="m3-body-large">Stay updated with the latest improvements and features.</p>
                    </header>

                    <div className={styles.content}>
                        <div className={styles.markdown}>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // Keep a single <h1> on the page (the page header above).
                                    h1: ({ node: _node, ...props }) => <h2 {...props} />,
                                }}
                            >
                                {changelog}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <div className="m3-container">
                        <p>© 2026 PocketScore Project. Built with Material 3 Expressive.</p>
                    </div>
                </footer>
            </main>
        </div>
    );
}
