const { HashRouter, Switch, Route, Redirect, useHistory } = ReactRouterDOM;

function LoginRoute() {
  const history = useHistory();
  const { login, user } = window.useAuth();

  // Polyfill if needed by existing auth page code
  window.ReactRouterDOMNavigate = (path, opts) =>
    opts && opts.replace ? history.replace(path) : history.push(path);

  const handleSuccess = (res) => {
    // Construct user object from response or default
    const userData = {
      name: res.name || "User",
      email: res.email || "user@example.com",
      collegeName: res.collegeName || "Foundira University",
      yearOfStudy: res.yearOfStudy || "1st",
      gender: res.gender || "Not Specified"
    };
    login(userData);
    history.push("/dashboard");
  };

  if (user) return <Redirect to="/dashboard" />;

  return <window.AuthPage mode="login" onSuccess={handleSuccess} />;
}

function SignupRoute() {
  const history = useHistory();
  const { user } = window.useAuth();

  window.ReactRouterDOMNavigate = (path, opts) =>
    opts && opts.replace ? history.replace(path) : history.push(path);

  if (user) return <Redirect to="/dashboard" />;

  return <window.AuthPage mode="signup" onSuccess={() => { }} />;
}

function SplashRoute() {
  return <window.SplashScreen />;
}

function IntroAnimationRoute() {
  const history = useHistory();

  // Per request: Always show animation on entry
  const handleComplete = () => {
    history.replace('/splash');
  };

  return <window.IntroAnimation onComplete={handleComplete} />;
}

function App() {
  return (
    <window.ThemeProvider>
      <window.AuthProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={IntroAnimationRoute} />
            <Route exact path="/splash" component={SplashRoute} />
            <Route exact path="/login" component={LoginRoute} />
            <Route exact path="/signup" component={SignupRoute} />

            {/* Protected Dashboard Routes */}
            <window.ProtectedRoute path="/dashboard" component={window.Dashboard} />

            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </window.AuthProvider>
    </window.ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
