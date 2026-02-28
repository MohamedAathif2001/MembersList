# Member Directory

A simple member directory that loads data from Google Sheets and displays it categorized.

## Deployment to Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add environment variable:
   - **Key**: `API_URL`
   - **Value**: Your Google Sheets JSON API URL

### Getting the Google Sheets URL

1. Open your Google Sheet
2. Go to **File > Share > Publish to web**
3. Choose the sheet and select **JSON** format
4. Copy the generated URL and use it as the `API_URL` environment variable

## Local Development

1. Create a `.env` file based on `.env.example`
2. Add your Google Sheets URL
3. Run with a local server that supports environment variables

## Expected Google Sheets Format

Your sheet should have columns:
- `No` - Member number
- `Name` - Member name
- `Category` - Category/Group
- `Position` - Position (optional)
