import { test, expect } from '@playwright/test';

// Define the app URL
const appAddress = 'http://localhost:5173'; // Oletetaan, että sovelluksesi on tässä osoitteessa

// Generate random user data
const name = (Math.random() + 1).toString(36).substring(7);
const email = `${name}@${(Math.random() + 1).toString(36).substring(7)}.io`;
const age = Math.floor(Math.random() * 100) + 18; // Generoi satunnainen ikä

test('adds a new user', async ({ page }) => {
    // Navigate to the Create User page
    await page.goto(`${appAddress}/create`);

    // Fill the name, email, and age fields
    await page.fill('input[placeholder="Name"]', name);
    await page.fill('input[placeholder="Email"]', email);
    await page.fill('input[placeholder="Age"]', age.toString());

    // Click the "Create" button
    await page.click('button:has-text("Create")');

    // Wait for the success message and check if it appears
    await expect(page.locator(`text=User created: ${name}`)).toBeVisible();

    // Navigate to the Users List page
    await page.goto(`${appAddress}/read`);

    // Ensure the new user appears in the list
    const userItem = page.locator(`li:has-text("${name} (${email}) - ${age} v")`);
    await expect(userItem).toBeVisible();
});

test('deletes the correct user', async ({ page }) => {
    // Navigate to the Read Users page
    await page.goto(`${appAddress}/read`);

    // Wait for the newly created user to be visible in the list
    const userItem = page.locator(`li:has-text("${name} (${email}) - ${age} v")`);
    await expect(userItem).toBeVisible();

    // Find and click the delete button inside the correct <li>
    const deleteButton = userItem.locator('button:has-text("Delete")');
    await deleteButton.click();

    // Ensure the user is no longer in the list
    await expect(userItem).not.toBeVisible();
});
