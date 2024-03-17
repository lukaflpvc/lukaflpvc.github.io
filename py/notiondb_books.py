from notion_client import Client
from dotenv import load_dotenv
import pandas as pd
import os


def extract_property(item, property_name):
    # This function extracts and returns the property value based on the property_name
    # Adjust the extraction logic based on the property type and structure
    prop = item["properties"].get(property_name, {})
    if prop.get("type") == "title" and prop.get("title"):
        return prop["title"][0]["plain_text"]
    elif (
        prop.get("type") == "rich_text"
        and prop.get("rich_text")
        and property_name == "Image (URL)"
    ):
        return prop["rich_text"][0]["href"]
    elif prop.get("type") == "rich_text" and prop.get("rich_text"):
        return prop["rich_text"][0]["plain_text"]
    elif prop.get("type") == "status" and prop.get("status"):
        return prop["status"]["name"]
    elif prop.get("type") == "multi_select" and prop.get("multi_select"):
        return ", ".join([genre["name"] for genre in prop["multi_select"]])
    elif prop.get("type") == "select" and prop.get("type"):
        return prop["select"]["name"]
    # Add more conditions as needed for other types
    return None


def main():
    "Run this to update my book databases."

    load_dotenv()

    notion_token = os.environ.get("NOTION_API_KEY")
    notion_db_id = os.environ.get("NOTION_BOOK_DATABASE_ID")

    client = Client(auth=notion_token)

    db_info = client.databases.query(database_id=notion_db_id)

    # with open("db_info.txt", "w", encoding="utf-8") as file:
    #    file.write(str(db_info))

    # Initialize an empty list to hold each row's data
    rows_data = []

    for item in db_info["results"]:
        print(item)
        # Extract the desired properties
        type = extract_property(item, "Type")
        title = extract_property(item, "Title")
        author = extract_property(item, "Author")
        genres = extract_property(item, "Genres")
        status = extract_property(item, "Status")
        image = extract_property(item, "Image (URL)")

        # Append a dictionary for each row
        rows_data.append(
            {
                "Type": type,
                "Title": title,
                "Author": author,
                "Genres": genres,
                "Status": status,
                "Image": image,
            }
        )

    # Convert the list of dictionaries into a DataFrame
    df = pd.DataFrame(rows_data)

    # Filter DataFrames based on the 'Status'
    df_finished = df.loc[(df["Status"] == "Finished") & (df["Type"] == "Book")]
    df_not_started = df.loc[(~df["Status"].isin(["Finished"])) & (df["Type"] == "Book")]

    # Sort the df_not_started DataFrame so that books currently being read are at the top
    # Assuming the status for books currently being read is "Reading"
    df_not_started["SortOrder"] = df_not_started["Status"].apply(
        lambda x: 0 if x == "Reading" else 1
    )
    df_not_started_sorted = df_not_started.sort_values(by="SortOrder").drop(
        "SortOrder", axis=1
    )

    # Save each DataFrame to a CSV file
    df_finished.to_csv("static/db/books_finished.csv", index=False)
    df_not_started_sorted.to_csv("static/db/books_to_read.csv", index=False)


if __name__ == "__main__":
    main()
    print(f"Notion Book Databases have been updated.")
