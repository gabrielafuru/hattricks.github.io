import pandas as pd

# Ruta del archivo CSV
file_path = "data/f1_hat_tricks.csv"

# Cargar los datos en un DataFrame
def load_data():
    return pd.read_csv(file_path)

# Ejemplo de preprocesamiento (agregar más funciones si es necesario)
def preprocess_data(data):
    if data is not None:
        # Ordenar los datos por "Hat-tricks"
        data = data.sort_values(by="Hat-tricks", ascending=False)
    return data
