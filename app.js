// ===== 데이터 =====

// 음식 데이터베이스
const foodDatabase = [
    { id: 1, name: "현미밥", emoji: "🍚", calories: 165, carbs: 35, protein: 3, fat: 1, portion: "1공기 (150g)" },
    { id: 2, name: "닭가슴살", emoji: "🍗", calories: 165, carbs: 0, protein: 31, fat: 4, portion: "1인분 (100g)" },
    { id: 3, name: "계란", emoji: "🥚", calories: 78, carbs: 1, protein: 6, fat: 5, portion: "1개 (50g)" },
    { id: 4, name: "그릭요거트", emoji: "🥛", calories: 100, carbs: 6, protein: 17, fat: 1, portion: "1개 (170g)" },
    { id: 5, name: "고구마", emoji: "🍠", calories: 130, carbs: 30, protein: 2, fat: 0, portion: "중간 크기 (150g)" },
    { id: 6, name: "바나나", emoji: "🍌", calories: 105, carbs: 27, protein: 1, fat: 0, portion: "1개 (120g)" },
    { id: 7, name: "아보카도", emoji: "🥑", calories: 160, carbs: 9, protein: 2, fat: 15, portion: "반개 (100g)" },
    { id: 8, name: "샐러드", emoji: "🥗", calories: 45, carbs: 8, protein: 2, fat: 1, portion: "1접시 (150g)" },
    { id: 9, name: "연어", emoji: "🐟", calories: 208, carbs: 0, protein: 20, fat: 13, portion: "1인분 (100g)" },
    { id: 10, name: "두부", emoji: "🧈", calories: 76, carbs: 2, protein: 8, fat: 5, portion: "1/4모 (100g)" },
    { id: 11, name: "아몬드", emoji: "🥜", calories: 164, carbs: 6, protein: 6, fat: 14, portion: "23개 (28g)" },
    { id: 12, name: "브로콜리", emoji: "🥦", calories: 55, carbs: 11, protein: 4, fat: 1, portion: "1컵 (156g)" },
    { id: 13, name: "오트밀", emoji: "🥣", calories: 150, carbs: 27, protein: 5, fat: 3, portion: "1/2컵 (40g)" },
    { id: 14, name: "사과", emoji: "🍎", calories: 95, carbs: 25, protein: 0, fat: 0, portion: "중간 크기 (182g)" },
    { id: 15, name: "소고기 스테이크", emoji: "🥩", calories: 271, carbs: 0, protein: 26, fat: 18, portion: "1인분 (100g)" },
    { id: 16, name: "퀴노아", emoji: "🌾", calories: 222, carbs: 39, protein: 8, fat: 4, portion: "1컵 (185g)" },
    { id: 17, name: "블루베리", emoji: "🫐", calories: 84, carbs: 21, protein: 1, fat: 0, portion: "1컵 (148g)" },
    { id: 18, name: "시금치", emoji: "🥬", calories: 23, carbs: 4, protein: 3, fat: 0, portion: "1컵 (100g)" },
    { id: 19, name: "당근", emoji: "🥕", calories: 41, carbs: 10, protein: 1, fat: 0, portion: "중간 크기 (100g)" },
    { id: 20, name: "참치캔", emoji: "🐟", calories: 116, carbs: 0, protein: 26, fat: 1, portion: "1캔 (100g)" },
];

// 레시피 데이터베이스
const recipeDatabase = [
    {
        id: 1,
        name: "닭가슴살 샐러드",
        desc: "신선한 야채와 구운 닭가슴살의 완벽한 조합",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        calories: 320,
        carbs: 15,
        protein: 35,
        fat: 12,
        tags: ["low-cal", "high-protein"],
        ingredients: ["닭가슴살 150g", "믹스 샐러드 100g", "방울토마토 50g", "올리브오일 1T", "발사믹 드레싱 1T"],
        steps: ["닭가슴살을 소금, 후추로 밑간한 후 에어프라이어에서 180도 15분간 굽는다.", "믹스 샐러드와 방울토마토를 씻어 접시에 담는다.", "구운 닭가슴살을 먹기 좋은 크기로 썰어 샐러드 위에 올린다.", "올리브오일과 발사믹 드레싱을 뿌려 완성한다."]
    },
    {
        id: 2,
        name: "아보카도 토스트",
        desc: "건강한 지방과 단백질이 풍부한 아침 메뉴",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400",
        calories: 380,
        carbs: 30,
        protein: 15,
        fat: 22,
        tags: ["low-carb"],
        ingredients: ["통밀빵 2조각", "아보카도 1개", "계란 2개", "레몬즙 1t", "소금, 후추 약간"],
        steps: ["통밀빵을 토스터기에 바삭하게 굽는다.", "아보카도를 반으로 갈라 씨를 제거하고 포크로 으깬다.", "으깬 아보카도에 레몬즙, 소금, 후추를 넣고 섞는다.", "계란은 프라이팬에 써니사이드업으로 굽는다.", "토스트 위에 아보카도를 바르고 계란을 올려 완성한다."]
    },
    {
        id: 3,
        name: "연어 퀴노아 볼",
        desc: "오메가3와 완전 단백질이 풍부한 영양 만점 식사",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
        calories: 450,
        carbs: 35,
        protein: 32,
        fat: 18,
        tags: ["high-protein"],
        ingredients: ["연어 150g", "퀴노아 1/2컵", "브로콜리 100g", "당근 50g", "간장 소스 2T"],
        steps: ["퀴노아를 물에 헹군 후 끓는 물에서 15분간 삶아 건져둔다.", "연어에 소금, 후추를 뿌리고 팬에서 앞뒤로 3분씩 굽는다.", "브로콜리와 당근은 먹기 좋게 잘라 살짝 데친다.", "볼에 퀴노아를 담고 연어와 야채를 올린다.", "간장 소스를 뿌려 완성한다."]
    },
    {
        id: 4,
        name: "그릭요거트 파르페",
        desc: "달콤하고 건강한 아침 또는 간식",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
        calories: 280,
        carbs: 35,
        protein: 20,
        fat: 6,
        tags: ["low-cal", "high-protein"],
        ingredients: ["그릭요거트 200g", "블루베리 50g", "그래놀라 30g", "꿀 1T", "아몬드 슬라이스 10g"],
        steps: ["유리잔에 그릭요거트를 1/3 담는다.", "블루베리와 그래놀라를 번갈아 층층이 쌓는다.", "나머지 요거트를 올리고 다시 과일을 올린다.", "꿀을 뿌리고 아몬드 슬라이스를 올려 완성한다."]
    },
    {
        id: 5,
        name: "두부 스테이크",
        desc: "고단백 저칼로리 식물성 메인 요리",
        image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=400",
        calories: 250,
        carbs: 12,
        protein: 18,
        fat: 14,
        tags: ["low-cal", "low-carb", "high-protein"],
        ingredients: ["두부 1모", "간장 2T", "참기름 1T", "마늘 2쪽", "파 1대", "깨 약간"],
        steps: ["두부를 1.5cm 두께로 썰어 키친타월로 물기를 제거한다.", "팬에 기름을 두르고 두부를 앞뒤로 노릇하게 굽는다.", "간장, 다진 마늘, 참기름을 섞어 소스를 만든다.", "구운 두부에 소스를 뿌리고 송송 썬 파와 깨를 올린다."]
    },
    {
        id: 6,
        name: "고구마 샐러드",
        desc: "포만감 높은 건강한 탄수화물 샐러드",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
        calories: 220,
        carbs: 42,
        protein: 4,
        fat: 4,
        tags: ["low-cal"],
        ingredients: ["고구마 2개", "믹스 샐러드 50g", "삶은 계란 1개", "견과류 15g", "발사믹 글레이즈 1T"],
        steps: ["고구마를 깨끗이 씻어 찜기에서 30분간 찐다.", "찐 고구마를 한입 크기로 자른다.", "접시에 믹스 샐러드를 깔고 고구마를 올린다.", "삶은 계란을 4등분하여 올린다.", "견과류를 뿌리고 발사믹 글레이즈를 뿌려 완성한다."]
    },
    {
        id: 7,
        name: "오트밀 바나나 팬케이크",
        desc: "밀가루 없이 만드는 건강한 팬케이크",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
        calories: 320,
        carbs: 45,
        protein: 14,
        fat: 8,
        tags: ["low-cal"],
        ingredients: ["오트밀 1컵", "바나나 1개", "계란 2개", "베이킹파우더 1/2t", "시나몬 약간", "꿀 1T"],
        steps: ["오트밀을 블렌더로 곱게 갈아 가루로 만든다.", "바나나를 으깨고 계란, 오트밀 가루, 베이킹파우더, 시나몬을 넣어 반죽한다.", "팬을 중약불로 달구고 반죽을 동그랗게 부친다.", "약 2분씩 앞뒤로 노릇하게 굽는다.", "접시에 담고 꿀을 뿌려 완성한다."]
    },
    {
        id: 8,
        name: "참치 야채 비빔밥",
        desc: "간편하게 만드는 단백질 가득 한 끼",
        image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400",
        calories: 420,
        carbs: 50,
        protein: 32,
        fat: 8,
        tags: ["high-protein"],
        ingredients: ["현미밥 1공기", "참치캔 1개", "오이 1/2개", "당근 1/2개", "계란 1개", "고추장 1T", "참기름 1t"],
        steps: ["참치는 기름을 빼고 준비한다.", "오이와 당근은 채 썬다.", "계란은 프라이로 만들거나 스크램블한다.", "그릇에 현미밥을 담고 준비한 재료를 올린다.", "고추장과 참기름을 넣고 비벼서 먹는다."]
    }
];

// ===== 상태 관리 =====
let userProfile = JSON.parse(localStorage.getItem('dietmate_profile')) || null;
let todayMeals = JSON.parse(localStorage.getItem('dietmate_meals_' + getToday())) || [];
let selectedMealType = 'breakfast';

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    setupNavigation();
    setupProfileForm();
    setupMealTypeSelector();
    setupRecipeFilters();
    renderRecipes();
    renderFoodList();
    updateDateDisplay();
    
    if (userProfile) {
        loadProfile();
        updateDashboard();
    }
}

// ===== 네비게이션 =====
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const sectionId = item.dataset.section;
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            
            if (sectionId === 'meal-plan') {
                updateMealPlanSummary();
            }
        });
    });
}

// ===== 날짜 =====
function getToday() {
    return new Date().toISOString().split('T')[0];
}

function updateDateDisplay() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    document.querySelector('.date-display').textContent = today.toLocaleDateString('ko-KR', options);
}

// ===== 프로필 폼 =====
function setupProfileForm() {
    const form = document.getElementById('profileForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveProfile();
    });
}

function loadProfile() {
    if (!userProfile) return;
    
    document.querySelector(`input[name="gender"][value="${userProfile.gender}"]`).checked = true;
    document.getElementById('age').value = userProfile.age;
    document.getElementById('height').value = userProfile.height;
    document.getElementById('weight').value = userProfile.weight;
    document.getElementById('targetWeight').value = userProfile.targetWeight;
    document.getElementById('activity').value = userProfile.activity;
    document.getElementById('goal').value = userProfile.goal;
    
    updateCalculationResult();
}

function saveProfile() {
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const targetWeight = parseFloat(document.getElementById('targetWeight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = document.getElementById('goal').value;
    
    if (!gender || !age || !height || !weight || !targetWeight) {
        alert('모든 정보를 입력해주세요!');
        return;
    }
    
    userProfile = { gender, age, height, weight, targetWeight, activity, goal };
    localStorage.setItem('dietmate_profile', JSON.stringify(userProfile));
    
    updateCalculationResult();
    updateDashboard();
    
    alert('저장되었습니다! 🎉');
}

function calculateBMR() {
    if (!userProfile) return 0;
    
    // Mifflin-St Jeor 공식
    const { gender, age, height, weight } = userProfile;
    let bmr;
    
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    return Math.round(bmr);
}

function calculateTDEE() {
    const bmr = calculateBMR();
    return Math.round(bmr * userProfile.activity);
}

function calculateTargetCalories() {
    const tdee = calculateTDEE();
    const { goal } = userProfile;
    
    switch (goal) {
        case 'lose-fast': return Math.round(tdee - 1000);
        case 'lose': return Math.round(tdee - 500);
        case 'maintain': return tdee;
        case 'gain': return Math.round(tdee + 500);
        default: return tdee;
    }
}

function calculateMacros(targetCal) {
    // 탄수화물 45%, 단백질 30%, 지방 25%
    return {
        carbs: Math.round((targetCal * 0.45) / 4), // 1g 탄수화물 = 4kcal
        protein: Math.round((targetCal * 0.30) / 4), // 1g 단백질 = 4kcal
        fat: Math.round((targetCal * 0.25) / 9) // 1g 지방 = 9kcal
    };
}

function updateCalculationResult() {
    const bmr = calculateBMR();
    const tdee = calculateTDEE();
    const targetCal = calculateTargetCalories();
    const macros = calculateMacros(targetCal);
    
    document.getElementById('bmrValue').textContent = `${bmr.toLocaleString()} kcal`;
    document.getElementById('tdeeValue').textContent = `${tdee.toLocaleString()} kcal`;
    document.getElementById('targetCalories').textContent = `${targetCal.toLocaleString()} kcal`;
    
    document.getElementById('recCarbs').textContent = `${macros.carbs}g`;
    document.getElementById('recProtein').textContent = `${macros.protein}g`;
    document.getElementById('recFat').textContent = `${macros.fat}g`;
    
    // 대시보드용 저장
    userProfile.targetCalories = targetCal;
    userProfile.macros = macros;
    localStorage.setItem('dietmate_profile', JSON.stringify(userProfile));
}

// ===== 대시보드 업데이트 =====
function updateDashboard() {
    if (!userProfile) return;
    
    const targetCal = userProfile.targetCalories || calculateTargetCalories();
    const macros = userProfile.macros || calculateMacros(targetCal);
    
    // 오늘 섭취량 계산
    const consumed = todayMeals.reduce((acc, meal) => ({
        calories: acc.calories + meal.calories,
        carbs: acc.carbs + meal.carbs,
        protein: acc.protein + meal.protein,
        fat: acc.fat + meal.fat
    }), { calories: 0, carbs: 0, protein: 0, fat: 0 });
    
    // 칼로리 원형 프로그레스
    const percentage = Math.min((consumed.calories / targetCal) * 100, 100);
    const circumference = 2 * Math.PI * 85;
    const offset = circumference - (percentage / 100) * circumference;
    
    document.querySelector('.circle-progress').style.strokeDashoffset = offset;
    document.querySelector('.calorie-consumed').textContent = consumed.calories.toLocaleString();
    document.querySelector('.calorie-goal').textContent = targetCal.toLocaleString();
    document.querySelector('.remaining-value').textContent = `${Math.max(0, targetCal - consumed.calories).toLocaleString()} kcal`;
    
    // SVG 그라데이션 추가
    const svg = document.querySelector('.calorie-circle');
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#10b981"/>
                <stop offset="100%" style="stop-color:#06d6a0"/>
            </linearGradient>
        `;
        svg.insertBefore(defs, svg.firstChild);
    }
    
    // 영양소 업데이트
    document.querySelector('.carbs-consumed').textContent = consumed.carbs;
    document.querySelector('.carbs-goal').textContent = macros.carbs;
    document.querySelector('.carbs-progress').style.width = `${Math.min((consumed.carbs / macros.carbs) * 100, 100)}%`;
    
    document.querySelector('.protein-consumed').textContent = consumed.protein;
    document.querySelector('.protein-goal').textContent = macros.protein;
    document.querySelector('.protein-progress').style.width = `${Math.min((consumed.protein / macros.protein) * 100, 100)}%`;
    
    document.querySelector('.fat-consumed').textContent = consumed.fat;
    document.querySelector('.fat-goal').textContent = macros.fat;
    document.querySelector('.fat-progress').style.width = `${Math.min((consumed.fat / macros.fat) * 100, 100)}%`;
    
    // 목표 체중
    document.querySelector('.current-weight').textContent = `${userProfile.weight}kg`;
    document.querySelector('.target-weight').textContent = `${userProfile.targetWeight}kg`;
    const diff = userProfile.weight - userProfile.targetWeight;
    document.querySelector('.weight-diff').textContent = diff > 0 ? `-${diff.toFixed(1)}kg` : `+${Math.abs(diff).toFixed(1)}kg`;
    
    // 오늘 먹은 음식 목록
    renderTodayMeals();
}

function renderTodayMeals() {
    const container = document.getElementById('todayMealsList');
    
    if (todayMeals.length === 0) {
        container.innerHTML = `
            <div class="empty-meals">
                <span>🍽️</span>
                <p>아직 기록된 식사가 없어요</p>
                <p class="hint">식사를 추가해보세요!</p>
            </div>
        `;
        return;
    }
    
    const mealTypeIcons = {
        breakfast: '🌅',
        lunch: '☀️',
        dinner: '🌙',
        snack: '🍎'
    };
    
    const mealTypeNames = {
        breakfast: '아침',
        lunch: '점심',
        dinner: '저녁',
        snack: '간식'
    };
    
    container.innerHTML = todayMeals.map((meal, index) => `
        <div class="meal-item">
            <div class="meal-item-info">
                <span class="meal-item-icon">${meal.emoji || mealTypeIcons[meal.type]}</span>
                <div>
                    <div class="meal-item-name">${meal.name}</div>
                    <div class="meal-item-time">${mealTypeNames[meal.type]}</div>
                </div>
            </div>
            <span class="meal-item-calories">${meal.calories} kcal</span>
            <button class="meal-item-delete" onclick="deleteMeal(${index})">×</button>
        </div>
    `).join('');
}

function deleteMeal(index) {
    todayMeals.splice(index, 1);
    localStorage.setItem('dietmate_meals_' + getToday(), JSON.stringify(todayMeals));
    updateDashboard();
}

// ===== 음식 추가 모달 =====
function showAddMealModal() {
    document.getElementById('addMealModal').classList.add('active');
}

function closeAddMealModal() {
    document.getElementById('addMealModal').classList.remove('active');
}

function setupMealTypeSelector() {
    const buttons = document.querySelectorAll('.meal-type-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMealType = btn.dataset.type;
        });
    });
}

function renderFoodList(filter = '') {
    const container = document.getElementById('foodList');
    const filtered = foodDatabase.filter(food => 
        food.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    container.innerHTML = filtered.map(food => `
        <div class="food-item" onclick="addFood(${food.id})">
            <div class="food-item-info">
                <span class="food-item-emoji">${food.emoji}</span>
                <div>
                    <div class="food-item-name">${food.name}</div>
                    <div class="food-item-portion">${food.portion}</div>
                </div>
            </div>
            <span class="food-item-cal">${food.calories} kcal</span>
        </div>
    `).join('');
}

function searchFood() {
    const query = document.getElementById('foodSearch').value;
    renderFoodList(query);
}

function addFood(foodId) {
    const food = foodDatabase.find(f => f.id === foodId);
    if (!food) return;
    
    const meal = {
        ...food,
        type: selectedMealType,
        timestamp: Date.now()
    };
    
    todayMeals.push(meal);
    localStorage.setItem('dietmate_meals_' + getToday(), JSON.stringify(todayMeals));
    
    closeAddMealModal();
    updateDashboard();
}

// ===== 레시피 =====
function setupRecipeFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRecipes(btn.dataset.filter);
        });
    });
}

function renderRecipes(filter = 'all') {
    const container = document.getElementById('recipesGrid');
    let filtered = recipeDatabase;
    
    if (filter !== 'all') {
        filtered = recipeDatabase.filter(recipe => recipe.tags.includes(filter));
    }
    
    container.innerHTML = filtered.map(recipe => `
        <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
            <div class="recipe-image" style="background-image: url('${recipe.image}')">
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${getTagLabel(tag)}</span>`).join('')}
                </div>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-name">${recipe.name}</h3>
                <p class="recipe-desc">${recipe.desc}</p>
                <div class="recipe-nutrition">
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.calories}</span>
                        <span class="nutrition-label">칼로리</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.carbs}g</span>
                        <span class="nutrition-label">탄수화물</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.protein}g</span>
                        <span class="nutrition-label">단백질</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.fat}g</span>
                        <span class="nutrition-label">지방</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function getTagLabel(tag) {
    const labels = {
        'low-cal': '저칼로리',
        'high-protein': '고단백',
        'low-carb': '저탄수'
    };
    return labels[tag] || tag;
}

function showRecipeDetail(recipeId) {
    const recipe = recipeDatabase.find(r => r.id === recipeId);
    if (!recipe) return;
    
    document.getElementById('recipeModalTitle').textContent = recipe.name;
    document.getElementById('recipeModalBody').innerHTML = `
        <div class="recipe-detail-image" style="background-image: url('${recipe.image}')"></div>
        <div class="recipe-detail-nutrition">
            <div class="nutrition-item">
                <span class="nutrition-value">${recipe.calories}</span>
                <span class="nutrition-label">칼로리</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-value">${recipe.carbs}g</span>
                <span class="nutrition-label">탄수화물</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-value">${recipe.protein}g</span>
                <span class="nutrition-label">단백질</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-value">${recipe.fat}g</span>
                <span class="nutrition-label">지방</span>
            </div>
        </div>
        <div class="recipe-ingredients">
            <h4>🥘 재료</h4>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-steps">
            <h4>👨‍🍳 조리법</h4>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        <button class="add-to-meal-btn" onclick="addRecipeToMeal(${recipe.id})">
            🍽️ 오늘 식단에 추가
        </button>
    `;
    
    document.getElementById('recipeModal').classList.add('active');
}

function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('active');
}

function addRecipeToMeal(recipeId) {
    const recipe = recipeDatabase.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const meal = {
        id: Date.now(),
        name: recipe.name,
        emoji: '🍽️',
        calories: recipe.calories,
        carbs: recipe.carbs,
        protein: recipe.protein,
        fat: recipe.fat,
        type: 'lunch',
        timestamp: Date.now()
    };
    
    todayMeals.push(meal);
    localStorage.setItem('dietmate_meals_' + getToday(), JSON.stringify(todayMeals));
    
    closeRecipeModal();
    updateDashboard();
    
    // 대시보드로 이동
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelector('[data-section="dashboard"]').classList.add('active');
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById('dashboard').classList.add('active');
}

// ===== 식단 추천 =====
function updateMealPlanSummary() {
    if (!userProfile) {
        document.getElementById('planTargetCal').textContent = '프로필을 먼저 설정해주세요';
        return;
    }
    
    const targetCal = userProfile.targetCalories || calculateTargetCalories();
    document.getElementById('planTargetCal').textContent = `${targetCal.toLocaleString()} kcal`;
}

function generateMealPlan() {
    if (!userProfile) {
        alert('먼저 내 정보를 설정해주세요!');
        return;
    }
    
    const targetCal = userProfile.targetCalories || calculateTargetCalories();
    
    // 칼로리 배분: 아침 25%, 점심 35%, 저녁 30%, 간식 10%
    const distribution = {
        breakfast: Math.round(targetCal * 0.25),
        lunch: Math.round(targetCal * 0.35),
        dinner: Math.round(targetCal * 0.30),
        snack: Math.round(targetCal * 0.10)
    };
    
    // 각 끼니별 음식 선택
    const plan = {
        breakfast: selectFoodsForMeal(distribution.breakfast, ['breakfast']),
        lunch: selectFoodsForMeal(distribution.lunch, ['lunch']),
        dinner: selectFoodsForMeal(distribution.dinner, ['dinner']),
        snack: selectFoodsForMeal(distribution.snack, ['snack'])
    };
    
    // 렌더링
    renderMealPlan(plan);
    
    // 총 칼로리 계산
    const totalCal = Object.values(plan).flat().reduce((sum, food) => sum + food.calories, 0);
    document.getElementById('planTotalCal').textContent = `${totalCal.toLocaleString()} kcal`;
}

function selectFoodsForMeal(targetCal, mealTypes) {
    const selected = [];
    let currentCal = 0;
    const shuffled = [...foodDatabase].sort(() => Math.random() - 0.5);
    
    // 메인 음식 선택 (밥/고구마/오트밀 등)
    const mains = shuffled.filter(f => ['현미밥', '고구마', '오트밀', '퀴노아'].includes(f.name));
    if (mains.length > 0 && mealTypes.includes('lunch') || mealTypes.includes('dinner')) {
        const main = mains[0];
        selected.push(main);
        currentCal += main.calories;
    }
    
    // 단백질 선택
    const proteins = shuffled.filter(f => f.protein >= 15 && !selected.includes(f));
    if (proteins.length > 0 && currentCal < targetCal * 0.8) {
        const protein = proteins[Math.floor(Math.random() * Math.min(3, proteins.length))];
        selected.push(protein);
        currentCal += protein.calories;
    }
    
    // 나머지 채우기
    for (const food of shuffled) {
        if (currentCal >= targetCal * 0.9) break;
        if (selected.includes(food)) continue;
        if (currentCal + food.calories <= targetCal * 1.1) {
            selected.push(food);
            currentCal += food.calories;
        }
    }
    
    return selected;
}

function renderMealPlan(plan) {
    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
    const planIds = ['breakfastPlan', 'lunchPlan', 'dinnerPlan', 'snackPlan'];
    
    mealTypes.forEach((type, index) => {
        const container = document.getElementById(planIds[index]);
        const foods = plan[type];
        
        if (foods.length === 0) {
            container.innerHTML = '<p class="empty-plan">추천 음식이 없습니다</p>';
            return;
        }
        
        container.innerHTML = foods.map(food => `
            <div class="plan-item">
                <div>
                    <span class="plan-item-name">${food.emoji} ${food.name}</span>
                    <div class="plan-item-portion">${food.portion}</div>
                </div>
                <span class="plan-item-cal">${food.calories} kcal</span>
            </div>
        `).join('');
    });
}

// 모달 외부 클릭시 닫기
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
