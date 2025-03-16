const featuredDiscussion = {
    title: "Mastering Daily Conversations",
    description: "Struggling with small talk or professional discussions? Learn how to express yourself confidently in different situations with practical tips.",
    author: "John Doe",
    timeAgo: "II Hours Past",
    replies: "XLII Replies"
};

const discussions = [
    {
        title: "How to Think in English",
        description: "Want to speak fluently? Learn strategies to train your brain to think directly in English, reducing hesitation.",
        author: "Sarah Smith",
        timeAgo: "IV Hours Past",
        replies: "XXIII Replies",
        lastReply: "Last: I Hour Past"
    },
    {
        title: "Common Mistakes in English Grammar",
        description: "Even advanced learners make these errors! Learn how to avoid common grammar mistakes to sound more natural.",
        author: "Mark Johnson",
        timeAgo: "VI Hours Past",
        replies: "XV Replies",
        lastReply: "Last: II Hours Past"
    }
];

// Render Featured Discussion
function renderFeaturedDiscussion() {
    const featuredSection = document.getElementById("featured-discussion");
    featuredSection.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h2 class="font-playfair font-black text-2xl sm:text-3xl text-neutral-900">English Learning Discussions</h2>
            <div class="text-xs text-neutral-600 italic">Page A1</div>
        </div>
        <div class="newspaper-border border-neutral-800 p-6 bg-white/50 ornate-corner">
            <div class="flex items-start gap-6">
                <div class="hidden sm:block">
                    <div class="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center border-2 border-neutral-300">
                        <span class="font-playfair font-bold text-neutral-600">JD</span>
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="font-playfair font-bold text-xl text-neutral-900 border-b border-neutral-200 pb-2">${featuredDiscussion.title}</h3>
                    <p class="mt-4 text-neutral-700 font-playfair leading-relaxed first-letter">${featuredDiscussion.description}</p>
                    <div class="mt-4 flex items-center gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-2">
                        <span class="italic">By ${featuredDiscussion.author}</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                        <span>${featuredDiscussion.timeAgo}</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                        <span>${featuredDiscussion.replies}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render Discussion List
function renderDiscussionList() {
    const discussionList = document.getElementById("discussion-list");
    discussionList.innerHTML = "";

    discussions.forEach(discussion => {
        const discussionElement = document.createElement("article");
        discussionElement.className = "newspaper-border border-neutral-800 p-6 bg-white/50 hover:bg-white/80 transition-colors ornate-corner";
        
        discussionElement.innerHTML = `
            <div class="flex gap-6">
                <div class="flex-1">
                    <h3 class="font-playfair font-bold text-lg text-neutral-900 border-b border-neutral-200 pb-2">${discussion.title}</h3>
                    <p class="mt-4 text-neutral-700 font-playfair first-letter">${discussion.description}</p>
                    <div class="mt-4 flex items-center gap-4 text-sm text-neutral-600 border-t border-neutral-200 pt-2">
                        <span class="italic">By ${discussion.author}</span>
                        <div class="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                        <span>${discussion.timeAgo}</span>
                    </div>
                </div>
                <div class="hidden sm:flex flex-col items-end justify-between text-neutral-600">
                    <span class="text-sm border-b border-neutral-200 pb-1">${discussion.replies}</span>
                    <span class="text-xs italic">${discussion.lastReply}</span>
                </div>
            </div>
        `;

        discussionList.appendChild(discussionElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    renderFeaturedDiscussion();
    renderDiscussionList();
});
