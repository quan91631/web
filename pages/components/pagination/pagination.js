class Pagination {
    constructor(totalPages) {
        this.currentPage = 1;
        this.totalPages = totalPages;
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.desktopView = document.querySelector('.pagination__desktop');
        this.mobileView = document.querySelector('.pagination__mobile');

        this.init();
    }

    init() {
        this.updateButtons();
        this.updateDisplay();
        this.addEventListeners();
    }

    updateButtons() {
        this.prevBtn.disabled = this.currentPage === 1;
        this.nextBtn.disabled = this.currentPage === this.totalPages;
    }

    updateDisplay() {
        // Update mobile view
        this.mobileView.querySelector('.pagination__current').textContent = 
            `${this.currentPage}/${this.totalPages}`;

        // Update desktop view
        this.desktopView.innerHTML = '';
        let start = Math.max(1, this.currentPage - 2);
        let end = Math.min(this.totalPages, start + 5);

        if (end - start < 5) {
            start = Math.max(1, end - 5);
        }

        for (let i = start; i <= end; i++) {
            const span = document.createElement('span');
            span.className = `pagination__number ${i === this.currentPage ? 'active' : ''}`;
            span.textContent = i;
            span.addEventListener('click', () => this.goToPage(i));
            this.desktopView.appendChild(span);
        }
    }

    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.goToPage(this.currentPage - 1));
        this.nextBtn.addEventListener('click', () => this.goToPage(this.currentPage + 1));
    }

    goToPage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        this.updateButtons();
        this.updateDisplay();
    }
}

// Initialize pagination with 20 pages
const pagination = new Pagination(20); 