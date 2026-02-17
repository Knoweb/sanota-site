# Sanota Deployment Guide

This guide outlines the steps to deploy the Sanota website to a DigitalOcean Droplet using GitHub Actions.

## Prerequisites

1.  **DigitalOcean Droplet**: Running Ubuntu 22.04 (or similar).
2.  **Domain Name** (Optional): Pointed to your Droplet's IP address.
3.  **GitHub Repository**: The code must be pushed to your repository.

## Step 1: Set Up DigitalOcean Droplet

1.  **SSH into your Droplet**:
    ```bash
    ssh root@<your-droplet-ip>
    ```

2.  **Update and Install Nginx**:
    ```bash
    sudo apt update
    sudo apt install nginx -y
    ```

3.  **Create Directory**:
    Create the directory where your site will live.
    ```bash
    sudo mkdir -p /var/www/sanota
    sudo chown -R $USER:$USER /var/www/sanota
    sudo chmod -R 755 /var/www
    ```

4.  **Configure Nginx**:
    Create a new configuration file:
    ```bash
    sudo nano /etc/nginx/sites-available/sanota
    ```
    Paste the following configuration:
    ```nginx
    server {
        listen 80;
        server_name your_domain_or_ip; # Replace with your domain or IP

        root /var/www/sanota;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    ```

5.  **Enable Site**:
    ```bash
    sudo ln -s /etc/nginx/sites-available/sanota /etc/nginx/sites-enabled/
    sudo rm /etc/nginx/sites-enabled/default  # Remove default config if not needed
    sudo nginx -t                             # Test configuration
    sudo systemctl restart nginx
    ```

## Step 2: Configure GitHub Secrets

Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.

Add the following secrets:

| Name | Value |
| :--- | :--- |
| `DO_HOST` | Your Droplet's IP address (e.g., `192.168.1.1`) |
| `DO_USERNAME` | Your Droplet username (usually `root`) |
| `DO_SSH_KEY` | Your **Private SSH Key** content |

**Note on SSH Key**:
- You must generate an SSH key pair locally (`ssh-keygen -t rsa -b 4096`).
- Add the **Public Key** (`id_rsa.pub`) to your Droplet's `~/.ssh/authorized_keys`.
- Add the **Private Key** (`id_rsa`) to config as `DO_SSH_KEY`.

## Step 3: Trigger Deployment

1.  Push any change to the `main` branch.
2.  Go to the **Actions** tab in your GitHub repository to see the workflow running.
3.  Once completed, visit your Droplet IP or Domain to see the live site.
