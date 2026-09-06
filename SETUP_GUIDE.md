# Tyler's Website Setup - Step by Step

## What You Got

A professional, clean Next.js website ready to deploy. It's built specifically for a cybersecurity resume site with:
- Professional header with dark design
- Hero section with your tagline
- About section (photo + credentials)
- Expandable experience timeline
- Skills showcase
- Contact info
- Mobile responsive
- Ready for future blog additions

---

## STEP 1: Add Your Photo (5 minutes)

1. Download your professional headshot (the rooftop photo you sent)
2. Rename it to `photo.jpg`
3. In the `twood-site` folder, create a folder called `public`
4. Place `photo.jpg` inside that `public` folder

Your folder structure should look like:
```
twood-site/
  ├── app/
  ├── public/
  │   └── photo.jpg  ← Your photo goes here
  ├── package.json
  └── ...
```

---

## STEP 2: Test Locally (10 minutes)

Run this in your terminal (in the `twood-site` folder):

```bash
npm install
npm run dev
```

Then open your browser to `http://localhost:3000`

You should see your site! Click around, expand experience items, test it on mobile view.

---

## STEP 3: Create a GitHub Account & Repository (10 minutes)

1. Go to https://github.com
2. Sign up (free)
3. After signing up, create a **New Repository**
   - Name: `twood-portfolio`
   - Description: "Professional cybersecurity resume site"
   - Make it **Public**
   - Click **Create Repository**

4. GitHub will show you instructions. Follow the "push an existing repository" section.
   
   In your terminal (inside `twood-site` folder), run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tyler Wood portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/twood-portfolio.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

---

## STEP 4: Deploy to Vercel (Free Hosting) (5 minutes)

1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **Sign up with GitHub** (use your GitHub account)
4. Give Vercel permission to access your GitHub
5. Click **Import Project**
6. Select your `twood-portfolio` repository
7. Click **Import**
8. Vercel will automatically build and deploy your site
9. You'll get a URL like `twood-portfolio.vercel.app` — visit it to see your live site!

---

## STEP 5: Connect Your Domain `twood.org` (10 minutes)

Once your site is live on Vercel:

1. In Vercel dashboard, go to your project
2. Click **Settings**
3. Go to **Domains**
4. Add domain: Type `twood.org`
5. Choose **Add** and then **I'll manage my own DNS** (since you bought it at Namecheap)
6. Vercel will show you some **DNS records** to add

7. Go to **Namecheap.com** and log in
8. Find your `twood.org` domain
9. Click **Manage**
10. Go to **Advanced DNS**
11. Add the DNS records Vercel gave you (they'll be CNAME, A, or similar records)
12. Save and wait 5-15 minutes for it to propagate

Your site will now be live at **twood.org** 🎉

---

## STEP 6: Test Everything

1. Visit `twood.org` on your phone and computer
2. Test the navigation links
3. Click on experience items to expand/collapse
4. Make sure the contact info is correct
5. Share the link with people (recruiters, networking contacts, LinkedIn)

---

## OPTIONAL: Update Content Later

All your content is in `app/page.js`. You can edit:

- **Tagline** - Line ~80
- **Experience** - `const roles = [` section (~26-95)
- **Skills** - `const skills = [` section (~98-120)
- **Contact email/phone** - Line ~294

After editing, just commit and push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy your changes.

---

## HELP

**If you get stuck:**
- GitHub Help: https://docs.github.com/
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

## That's it!

You now have a professional resume site at **twood.org** with your photo, experience, skills, and contact info.

Later, when you want to add blog posts, we can easily add that capability.

Good luck! 🚀
