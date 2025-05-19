describe('Login Page', () => {

    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
    });

   it('should login with valid credentials', async () => {
    await browser.url('https://www.saucedemo.com');
    await $('#user-name').setValue('standard_user');
    await browser.pause(2000);
    await $('#password').setValue('secret_sauce');
    await browser.pause(2000); 
    await $('#login-button').click();
    await browser.pause(2000); 
    await expect(browser).toHaveUrlContaining('inventory');
});

    it('should show error for invalid username', async () => {
        await $('#user-name').setValue('invalid_user');
        await browser.pause(2000);
        await $('#password').setValue('secret_sauce');
        await browser.pause(2000);
        await $('#login-button').click();
        await browser.pause(2000);

        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveTextContaining('Epic sadface: Username and password do not match');
    });

    it('should show error for invalid password', async () => {
        await $('#user-name').setValue('standard_user');
        await browser.pause(2000);
        await $('#password').setValue('wrong_password');
        await browser.pause(2000);
        await $('#login-button').click();
        await browser.pause(2000);

        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveTextContaining('Epic sadface: Username and password do not match');
    });

    it('should show error when both fields are empty', async () => {
        await $('#login-button').click();
        await browser.pause(2000);

        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveTextContaining('Epic sadface: Username is required');
    });

    it('should show error when username is empty', async () => {
        await $('#password').setValue('secret_sauce');
        await browser.pause(2000);
        await $('#login-button').click();

        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveTextContaining('Epic sadface: Username is required');
    });

    it('should show error when password is empty', async () => {
        await $('#user-name').setValue('standard_user');
        await browser.pause(2000);
        await $('#login-button').click();

        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveTextContaining('Epic sadface: Password is required');
    });
});
