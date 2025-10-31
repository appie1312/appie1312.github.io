function Home() {
  return (
    <div className="text-center mt-5 pt-5">
      <h1 className="display-5 fw-bold text-body-emphasis">Pokemon Teams</h1>

      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly create and customize your Pokémon teams, plan strategies,
          choose the perfect lineup, and explore hundreds of Pokémon to catch
          and train. Build your ultimate team and dominate battles with
          your favorite Pokémon in an interactive, fun web experience.

        </p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-primary btn-lg px-5 gap-3">
            list
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            teams
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
