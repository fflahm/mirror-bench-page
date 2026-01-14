document.addEventListener('DOMContentLoaded', function() {
    // 你的数据 - 替换为你的实际benchmark数据
    const overallData = [
        {model: "MirrorBench-1.3B", self_centric: 85.2, visual_quality: 78.9, overall: 82.1},
        {model: "GPT-4V", self_centric: 78.9, visual_quality: 72.3, overall: 75.6},
        {model: "LLaVA-1.5", self_centric: 76.8, visual_quality: 68.2, overall: 72.5},
        {model: "Qwen-VL", self_centric: 73.5, visual_quality: 65.8, overall: 69.7},
        {model: "IDEFICS2", self_centric: 70.2, visual_quality: 62.1, overall: 66.2}
    ];

    const detailedData = [
        {model: "MirrorBench-1.3B", level0: 95.2, level1_2: 87.3, level3: 73.1, technical: 84.5, aesthetic: 81.2, distortion: 78.9},
        {model: "GPT-4V", level0: 92.1, level1_2: 82.5, level3: 62.1, technical: 79.8, aesthetic: 76.4, distortion: 70.2},
        // ... 其他模型数据
    ];

    // 创建总体结果表格
    const overallTable = new Tabulator("#mirrorbench-overall-table", {
        data: overallData,
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No Data Available",
        columns: [
            {title: "Model", field: "model", width: 200, headerFilter: true},
            {title: "Self-Centric Intelligence", field: "self_centric", width: 150, 
             formatter: function(cell) {
                 return `<strong>${cell.getValue()}</strong>`;
             }},
            {title: "Visual Quality", field: "visual_quality", width: 150},
            {title: "Overall Score", field: "overall", width: 150, 
             formatter: "progress", formatterParams: {
                 min: 0, max: 100, color: ["#ffcccc", "#ff9999", "#ff6666", "#ff3333", "#ff0000"]
             }}
        ],
        rowFormatter: function(row) {
            const data = row.getData();
            if (data.model.includes("MirrorBench")) {
                row.getElement().style.backgroundColor = "#fff8e6";
                row.getCell("model").getElement().style.fontWeight = "bold";
            }
        }
    });

    // 创建详细结果表格
    const detailedTable = new Tabulator("#mirrorbench-detailed-table", {
        data: detailedData,
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No Data Available",
        columns: [
            {title: "Model", field: "model", width: 200, headerFilter: true},
            {title: "Level 0", field: "level0", width: 100},
            {title: "Level 1-2", field: "level1_2", width: 100},
            {title: "Level 3", field: "level3", width: 100},
            {title: "Technical Quality", field: "technical", width: 120},
            {title: "Aesthetic Quality", field: "aesthetic", width: 120},
            {title: "Distortion", field: "distortion", width: 100}
        ],
        rowFormatter: function(row) {
            const data = row.getData();
            if (data.model.includes("MirrorBench")) {
                row.getElement().style.backgroundColor = "#fff8e6";
            }
        }
    });

    // 添加排序功能
    overallTable.on("tableBuilt", function() {
        overallTable.setSort("overall", "desc");
    });
    
    detailedTable.on("tableBuilt", function() {
        detailedTable.setSort("level3", "desc");
    });
});