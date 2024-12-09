from flask import Flask, render_template
from visualizations.analysis import load_data, preprocess_data
from visualizations.plots import plot_top_drivers, plot_hat_tricks_evolution, plot_all_drivers


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/all')
def all_drivers():
    df = load_data()
    df = preprocess_data(df)
    fig = plot_all_drivers()
    return render_template('all.html', graph_html=fig.to_html(full_html=False))

@app.route('/top10')
def top_10():
    df = load_data()
    df = preprocess_data(df)
    fig = plot_top_drivers(df)
    return render_template('top10.html', graph_html=fig.to_html(full_html=False))

@app.route('/top3')
def top_3():
    fig = plot_hat_tricks_evolution()
    return render_template('top3.html', graph_html=fig.to_html(full_html=False))

if __name__ == '__main__':
    app.run(debug=True)