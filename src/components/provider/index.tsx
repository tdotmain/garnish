import * as React from "react";

interface Theme {
  modes: string[];
  mode: string;
  toggleTheme: () => void;
}

interface GarnishState {
  theme: Theme;
}

const STORAGE_KEY = "garnish.theme";
const modes = ["light", "dark"];

const initialState = {
  theme: {
    modes,
    mode: modes[0],
    toggleTheme: () => {},
  },
};

const GarnishContext = React.createContext<GarnishState>(initialState);

function checkPrefersColorSchemeClassnamePresence() {
  if (
    !document.documentElement.classList.contains("dark") &&
    !document.documentElement.classList.contains("light")
  )
    document.documentElement.classList.add(initialState.theme.mode);
}

interface GarnishProviderProps {
  children: React.ReactNode;
}

export function GarnishProvider(props: GarnishProviderProps) {
  const [theme, setTheme] = React.useState(initialState.theme);

  const toggleTheme = () =>
    setTheme({
      ...theme,
      mode: theme.mode === "light" ? "dark" : "light",
    });

  React.useEffect(() => checkPrefersColorSchemeClassnamePresence(), []);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const callback = (query: Partial<MediaQueryList>) => {
      if (query.matches) {
        localStorage.setItem(STORAGE_KEY, "dark");
        document?.documentElement?.classList?.remove("light");
        document?.documentElement?.classList?.add("dark");
        setTheme({ ...theme, mode: "dark" });
      } else {
        localStorage.setItem(STORAGE_KEY, "light");
        document?.documentElement?.classList?.remove("dark");
        document?.documentElement?.classList?.add("light");
        setTheme({ ...theme, mode: "light" });
      }
    };

    mediaQuery.addEventListener("change", callback);

    return () => mediaQuery.removeEventListener("change", callback);
  }, [theme]);

  const context = { theme: { ...theme, toggleTheme } };

  return (
    <GarnishContext.Provider value={context}>
      {props.children}
    </GarnishContext.Provider>
  );
}

export function useGarnish() {
  return React.useContext(GarnishContext);
}

export default GarnishProvider;
