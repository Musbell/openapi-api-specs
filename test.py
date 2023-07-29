    """
I have been working on a dataset and I have uploaded it. Additionally, I have created a couple of visualizations to gain an initial understanding of the data. Would you like me to share the code with you so you can continue from where I left off?
    """






import zipfile
import os
import pandas as pd
import xarray as xr

# Define the file path and extraction directory
zip_file_path = "/mnt/data/gdhy_v1.2_v1.3_20190128.zip"
extraction_dir = "/mnt/data/gdhy_dataset"

# Unzip the file
with zipfile.ZipFile(zip_file_path, "r") as zip_ref:
    zip_ref.extractall(extraction_dir)

# List the contents of the extracted directory
extracted_files = os.listdir(extraction_dir)
extracted_files
# List the contents of the 'maize' subdirectory
maize_subdirectory_contents = os.listdir(os.path.join(extraction_dir, "maize"))
maize_subdirectory_contents

# Define the file path for the maize yield data in 1981
file_path_1981 = os.path.join(extraction_dir, "maize", "yield_1981.nc4")

# Load the NetCDF file using xarray
ds_1981 = xr.open_dataset(file_path_1981)

# Display the contents of the NetCDF file
ds_1981


# Update the function to load and preprocess maize yield data from a NetCDF file
def load_maize_yield_data_updated(file_path):
    # Load the NetCDF file using xarray
    ds = xr.open_dataset(file_path)

    # Extract maize yield data (now the variable name is 'var')
    maize_yield_data = ds["var"].values

    # Extract latitude and longitude coordinates
    latitude = ds["lat"].values
    longitude = ds["lon"].values

    # Convert the data to a pandas DataFrame
    df = pd.DataFrame(
        maize_yield_data,
        columns=[f"Longitude_{lon}" for lon in longitude],
        index=[f"Latitude_{lat}" for lat in latitude],
    )

    # Close the NetCDF dataset
    ds.close()

    return df


# Load and preprocess maize yield data for the year 1981 using the updated function
maize_yield_1981_updated = load_maize_yield_data_updated(
    os.path.join(extraction_dir, "maize", "yield_1981.nc4")
)

# Display the processed maize yield data for the year 1981
maize_yield_1981_updated.head()


# Define a general function to load and preprocess crop yield data from NetCDF files for all years
def load_crop_yield_data(crop, min_year, max_year):
    crop_data = {}
    for year in range(min_year, max_year + 1):
        file_path = os.path.join(extraction_dir, crop, f"yield_{year}.nc4")
        yield_data = load_maize_yield_data_updated(file_path)
        crop_data[year] = yield_data
    return crop_data


# Load and preprocess crop yield data for each crop (maize, rice, wheat, soybean) for the years 1981 to 2016
min_year = 1981
max_year = 2016

maize_yield_data = load_crop_yield_data("maize", min_year, max_year)
rice_yield_data = load_crop_yield_data("rice", min_year, max_year)
wheat_yield_data = load_crop_yield_data("wheat", min_year, max_year)
soybean_yield_data = load_crop_yield_data("soybean", min_year, max_year)

# Display the processed maize yield data for the year 1981 as an example
maize_yield_data[1981].head()



#-----------------------------------------------------------------#

import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Function to calculate the global average yield for each crop for each year
def calculate_global_average_yield(crop_yield_data):
    averages = []
    for year, data in crop_yield_data.items():
        averages.append(data.mean().mean())
    return averages

# Calculate the global average yield for each crop
maize_avg_yield = calculate_global_average_yield(maize_yield_data)
rice_avg_yield = calculate_global_average_yield(rice_yield_data)
wheat_avg_yield = calculate_global_average_yield(wheat_yield_data)
soybean_avg_yield = calculate_global_average_yield(soybean_yield_data)

# Plot the average yields over time
years = range(min_year, max_year + 1)
plt.figure(figsize=(10, 6))
plt.plot(years, maize_avg_yield, label='Maize', marker='o')
plt.plot(years, rice_avg_yield, label='Rice', marker='o')
plt.plot(years, wheat_avg_yield, label='Wheat', marker='o')
plt.plot(years, soybean_avg_yield, label='Soybean', marker='o')
plt.xlabel('Year')
plt.ylabel('Global Average Yield (unknown unit)')
plt.title('Global Average Yields of Major Crops (1981-2016)')
plt.legend()
plt.grid(True)
plt.show()



# Function to plot geographic heatmap for crop yield
def plot_geographic_heatmap(crop_yield_data, crop_name, year):
    # Extract data for the given year
    data = crop_yield_data[year]
    
    # Extract latitude and longitude coordinates from data
    latitude = [float(lat.split("_")[1]) for lat in data.index]
    longitude = [float(lon.split("_")[1]) for lon in data.columns]
    
    # Create a meshgrid for latitude and longitude
    lon, lat = np.meshgrid(longitude, latitude)
    
    # Plot the heatmap
    plt.figure(figsize=(12, 6))
    plt.pcolormesh(lon, lat, data.values, shading='auto', cmap='viridis')
    plt.colorbar(label='Yield')
    plt.xlabel('Longitude')
    plt.ylabel('Latitude')
    plt.title(f'Geographic Distribution of {crop_name} Yield in {year}')
    plt.show()

# Plot geographic heatmaps for each crop for the year 2016
for crop_data, crop_name in zip([maize_yield_data, rice_yield_data, wheat_yield_data, soybean_yield_data],
                                ["Maize", "Rice", "Wheat", "Soybean"]):
    plot_geographic_heatmap(crop_data, crop_name, 2016)

   

# Function to create boxplots for crop yield distribution
def plot_yield_distribution(crop_yield_data, crop_name):
    # Randomly sample years for visualization
    sampled_years = np.random.choice(list(crop_yield_data.keys()), size=5, replace=False)
    sampled_data = [crop_yield_data[year].values.flatten() for year in sampled_years]
    
    # Flatten the data and create a DataFrame
    all_data = np.concatenate(sampled_data)
    year_labels = np.concatenate([[year] * sampled_data[i].size for i, year in enumerate(sampled_years)])
    df = pd.DataFrame({'Year': year_labels, 'Yield': all_data})
    
    # Create the boxplot
    plt.figure(figsize=(10, 6))
    sns.boxplot(x='Year', y='Yield', data=df)
    plt.xlabel('Year')
    plt.ylabel('Yield')
    plt.title(f'Distribution of {crop_name} Yields (Random Sample of Years)')
    plt.show()

# Plot boxplots for each crop
for crop_data, crop_name in zip([maize_yield_data, rice_yield_data, wheat_yield_data, soybean_yield_data],
                                ["Maize", "Rice", "Wheat", "Soybean"]):
    plot_yield_distribution(crop_data, crop_name)