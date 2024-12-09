import plotly.express as px
import pandas as pd
from visualizations.analysis import load_data, preprocess_data

# Gráfico interactivo para Top 10 pilotos con más Hat-tricks
def plot_top_drivers(data):
    fig = px.bar(data.head(10),
                x="Hat-tricks", y="Driver", color="Hat-tricks",
                color_continuous_scale="Viridis",
                title="Top 10 F1 Drivers with Most Hat-tricks",
                labels={"Driver": "Driver", "Hat-tricks": "Number of Hat-tricks"})
    fig.update_layout(
        title_font_size=22,
        xaxis_title="Number of Hat-tricks",
        yaxis_title="Driver",
        template="plotly_white"
    )
    return fig

# Gráfico de líneas para evolución de Hat-tricks
def plot_hat_tricks_evolution():
    data = {
        "Schumacher": [22, 19, 18, 20, 15, 17],
        "Hamilton": [15, 17, 16, 14, 12, 13],
        "Verstappen": [12, 14, 13, 16, 18, 20]
    }
    df = pd.DataFrame(data)
    fig = px.line(df, y=["Schumacher", "Hamilton", "Verstappen"], 
                title="Evolution Hat-tricks for Drivers")
    fig.update_layout(
        yaxis_title="Hat-tricks",
        title_font_size=18
    )
    return fig
    
def plot_all_drivers():
    df = load_data()  # Assuming load_data() is defined elsewhere to load the CSV
    fig = px.bar(df, x="Hat-tricks", y="Driver", 
                color="Hat-tricks",
                color_continuous_scale=["#FF0000", "#000000"])  # Rojo a negro
    fig.update_layout(
        title="Top F1 Drivers by Hat-tricks",
        xaxis_title="Number of Hat-tricks",
        yaxis_title="Driver",
    )
    return fig
